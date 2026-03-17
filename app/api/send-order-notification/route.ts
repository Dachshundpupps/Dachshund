import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/brevo"

export async function POST(request: Request) {
  try {
    const { order, orderItems, customerInfo, paymentMethod, totalAmount } = await request.json()

    const orderItemsHtml = orderItems
      .map(
        (item: any) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.puppy_name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.puppy_breed || "Mixed"}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.puppy_gender || "Not specified"}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.quantity || 1}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">$${item.puppy_price}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">$${(item.puppy_price * (item.quantity || 1)).toFixed(2)}</td>
        </tr>
      `,
      )
      .join("")

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 3px solid #8B4513; padding-bottom: 10px;">New Order Notification</h2>
        <p style="color: #666;">A new order has been placed.</p>

        <h3 style="color: #333; margin-top: 25px;">Order Details:</h3>
        <p><strong>Order Number:</strong> ${order.order_number}</p>
        <p><strong>Order Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
        <p><strong>Status:</strong> ${order.status || "Pending"}</p>

        <h3 style="color: #333; margin-top: 25px;">Customer Information:</h3>
        <ul style="color: #666;">
          <li><strong>Name:</strong> ${customerInfo.name}</li>
          <li><strong>Email:</strong> ${customerInfo.email}</li>
          <li><strong>Phone:</strong> ${customerInfo.phone}</li>
          <li><strong>Address:</strong> ${customerInfo.address || "Not provided"}</li>
          <li><strong>City:</strong> ${customerInfo.city || "Not provided"}</li>
          <li><strong>State:</strong> ${customerInfo.state || "Not provided"}</li>
          <li><strong>Zip Code:</strong> ${customerInfo.zip || customerInfo.zipCode || "Not provided"}</li>
        </ul>

        <h3 style="color: #333; margin-top: 25px;">Items Ordered:</h3>
        <table style="width: 100%; border-collapse: collapse; background: white;">
          <thead style="background-color: #8B4513; color: white;">
            <tr>
              <th style="padding: 12px; text-align: left;">Puppy Name</th>
              <th style="padding: 12px; text-align: left;">Breed</th>
              <th style="padding: 12px; text-align: left;">Gender</th>
              <th style="padding: 12px; text-align: left;">Qty</th>
              <th style="padding: 12px; text-align: left;">Price</th>
              <th style="padding: 12px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsHtml}
          </tbody>
        </table>

        <h3 style="color: #333; margin-top: 25px;">Order Summary:</h3>
        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513;">
          <ul style="color: #666; margin: 0; padding-left: 20px;">
            <li><strong>Subtotal:</strong> $${totalAmount}</li>
            <li><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</li>
            <li style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;"><strong>Total Amount:</strong> <span style="color: #8B4513; font-size: 18px;">$${totalAmount}</span></li>
          </ul>
        </div>

        <p style="margin-top: 25px; padding: 15px; background: #fff3cd; border-radius: 5px; color: #856404;">
          <strong>Action Required:</strong> Please contact the customer to confirm payment and arrange shipping details.
        </p>

        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Best regards,<br/>
          Dachshund Haven<br/>
          support@dachshundpuppiesonline.shop
        </p>
      </div>
    `

    const adminEmails =
      [process.env.ADMIN_EMAIL, process.env.ADMIN_EMAIL_2].filter(Boolean).join(",") ||
      "support@dachshundpuppiesonline.shop"

    // Email to admin(s)
    const adminEmailResult = await sendEmail({
      to: adminEmails,
      subject: `New Order: ${order.order_number} - ${customerInfo.name}`,
      html: adminEmailHtml,
    })
    
    if (!adminEmailResult.success) {
      console.warn("Admin email failed but continuing:", adminEmailResult.error)
    }

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 3px solid #8B4513; padding-bottom: 10px;">Order Confirmation</h2>
        <p style="color: #666;">Hi ${customerInfo.name},</p>
        <p style="color: #666;">Thank you for your order! We've received your purchase and will process it shortly. Our team will contact you soon to confirm payment and arrange delivery.</p>

        <h3 style="color: #333; margin-top: 25px;">Order Details:</h3>
        <p><strong>Order Number:</strong> ${order.order_number}</p>
        <p><strong>Order Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
        <p><strong>Status:</strong> ${order.status || "Pending"}</p>

        <h3 style="color: #333; margin-top: 25px;">Delivery Address:</h3>
        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513; color: #666;">
          <p style="margin: 0;">${customerInfo.name}</p>
          <p style="margin: 5px 0;">${customerInfo.address || "Address not provided"}</p>
          <p style="margin: 5px 0;">${customerInfo.city || ""} ${customerInfo.state || ""} ${customerInfo.zip || customerInfo.zipCode || ""}</p>
          <p style="margin: 5px 0;">${customerInfo.phone}</p>
          <p style="margin: 5px 0;">${customerInfo.email}</p>
        </div>

        <h3 style="color: #333; margin-top: 25px;">Items Ordered:</h3>
        <table style="width: 100%; border-collapse: collapse; background: white;">
          <thead style="background-color: #8B4513; color: white;">
            <tr>
              <th style="padding: 12px; text-align: left;">Puppy Name</th>
              <th style="padding: 12px; text-align: left;">Breed</th>
              <th style="padding: 12px; text-align: left;">Gender</th>
              <th style="padding: 12px; text-align: left;">Qty</th>
              <th style="padding: 12px; text-align: left;">Price</th>
              <th style="padding: 12px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsHtml}
          </tbody>
        </table>

        <h3 style="color: #333; margin-top: 25px;">Order Summary:</h3>
        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513;">
          <ul style="color: #666; margin: 0; padding-left: 20px;">
            <li><strong>Subtotal:</strong> $${totalAmount}</li>
            <li><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</li>
            <li style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;"><strong>Total Amount:</strong> <span style="color: #8B4513; font-size: 18px;">$${totalAmount}</span></li>
          </ul>
        </div>

        <h3 style="color: #333; margin-top: 25px;">What's Next?</h3>
        <ol style="color: #666;">
          <li>Our team will contact you within 24 hours to confirm payment details</li>
          <li>Once payment is confirmed, we'll arrange the best delivery time for you</li>
          <li>You'll receive updates on your puppy's preparation and shipping status</li>
          <li>We'll provide tracking information once your puppy is on the way</li>
        </ol>

        <p style="margin-top: 20px; padding: 15px; background: #d4edda; border-radius: 5px; color: #155724; border: 1px solid #c3e6cb;">
          Questions? Contact us at <strong>support@dachshundpuppiesonline.shop</strong> or call the number we have on file.
        </p>

        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Best regards,<br/>
          Dachshund Haven Team<br/>
          support@dachshundpuppiesonline.shop
        </p>
      </div>
    `

    // Send confirmation email to customer
    const customerEmailResult = await sendEmail({
      to: customerInfo.email,
      subject: `Order Confirmation - Dachshund Haven - ${order.order_number}`,
      html: customerEmailHtml,
    })
    
    if (!customerEmailResult.success) {
      console.warn("Customer email failed but continuing:", customerEmailResult.error)
    }

    console.log("Order emails processed")
    return NextResponse.json({ success: true, message: "Order confirmation processed" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email notification" }, { status: 500 })
  }
}
