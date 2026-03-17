import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error("JSON parsing error:", parseError)
      return NextResponse.json(
        { success: false, error: "Invalid request format. Please ensure the data is properly formatted JSON." },
        { status: 400 },
      )
    }

    const { customerInfo, cartItems, paymentMethod, totalAmount } = body

    if (!customerInfo?.name || !customerInfo?.email || !customerInfo?.phone) {
      return NextResponse.json({ success: false, error: "Missing customer name, email, or phone" }, { status: 400 })
    }

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ success: false, error: "Cart is empty" }, { status: 400 })
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    const orderData = {
      order_number: orderNumber,
      customer_name: customerInfo.name,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      customer_address: customerInfo.address || "",
      customer_city: customerInfo.city || "",
      customer_state: customerInfo.state || "",
      customer_zip: customerInfo.zip || customerInfo.zipCode || "",
      payment_method: paymentMethod,
      total_amount: totalAmount,
      status: "pending",
    }

    // Try to save to database, but don't fail if it doesn't work
    let order = { id: Date.now().toString(), ...orderData }
    let savedToDb = false
    let orderItems: any[] = []

    try {
      const supabase = await createClient()
      const { data: dbOrder, error: orderError } = await supabase.from("orders").insert(orderData).select().single()

      if (!orderError && dbOrder) {
        order = dbOrder
        savedToDb = true
      } else if (orderError) {
        console.warn("Database save skipped, continuing with email notification")
      }
    } catch (dbError) {
      console.warn("Database connection skipped, continuing with email notification")
    }

    // Always try to save order items if we have a database order
    if (savedToDb) {
      try {
        orderItems = cartItems.map((item: any) => ({
          order_id: order.id,
          puppy_name: item.name,
          puppy_breed: item.breed || "Mixed",
          puppy_color: item.color || "Various",
          puppy_gender: item.gender || "Not specified",
          puppy_age: item.age || "Not specified",
          puppy_price: item.price,
          puppy_image: item.image,
          quantity: item.quantity || 1,
          payment_type: item.paymentType || "full",
        }))

        const supabase = await createClient()
        const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

        if (itemsError) {
          console.warn("Order items creation skipped")
        }
      } catch (itemsDbError) {
        console.warn("Order items database operation skipped")
      }
    }

    // Prepare orderItems for email
    const emailOrderItems = cartItems.map((item: any) => ({
      puppy_name: item.name,
      puppy_price: item.price,
      quantity: item.quantity || 1,
      payment_type: item.paymentType || "full",
    }))

    try {
      const emailResponse = await fetch(`${new URL(request.url).origin}/api/send-order-notification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order,
          orderItems: emailOrderItems,
          customerInfo,
          paymentMethod,
          totalAmount,
        }),
      })

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text()
        console.error("Email notification error:", errorText)
      } else {
        try {
          await emailResponse.json()
        } catch (parseErr) {
          // Email sent but response parse failed
        }
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError)
    }

    try {
      const webhookResponse = await fetch("https://hooks.zapier.com/hooks/catch/25338530/u8hytef/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "order",
          order,
          orderItems: emailOrderItems,
          customerInfo,
          paymentMethod,
          totalAmount,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!webhookResponse.ok) {
        console.warn("Webhook status:", webhookResponse.status)
      }
    } catch (webhookError) {
      console.error("Webhook error:", webhookError)
    }

    return NextResponse.json({ success: true, order })
  } catch (error) {
    console.error("Order API error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ success: false, error: `Server error: ${errorMessage}` }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const admin = searchParams.get("admin")

    let query = supabase
      .from("orders")
      .select(`
        *,
        order_items (*)
      `)
      .order("created_at", { ascending: false })

    if (!admin && email) {
      query = query.eq("customer_email", email)
    }

    const { data: orders, error } = await query

    if (error) {
      console.error("Fetch orders error:", error)
      throw error
    }

    return NextResponse.json({ success: true, orders: orders || [] })
  } catch (error) {
    console.error("Orders API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 })
  }
}
