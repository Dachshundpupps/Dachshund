import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  try {
    const supabase = await createClient()
    const body = await request.json()

    const { orderId, status } = body

    if (!orderId || !status) {
      return NextResponse.json({ success: false, error: "Missing orderId or status" }, { status: 400 })
    }

    const { data: order, error: updateError } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId)
      .select()
      .single()

    if (updateError) {
      console.error("Order update error:", updateError)
      throw updateError
    }

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/25338530/u8hytef/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "order_status_updated",
          order,
          newStatus: status,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (webhookError) {
      console.error("Zapier webhook error:", webhookError)
    }

    return NextResponse.json({ success: true, order })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 })
  }
}
