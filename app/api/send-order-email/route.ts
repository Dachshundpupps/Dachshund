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
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">$${item.puppy_price}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">$${item.puppy_price * item.quantity}</td>
        </tr>
      `,
      )
      .join("")

    // Email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Order Received</h2>
        <p><strong>Order Number:</strong> ${order.order_number}</p>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${customerInfo.name}</li>
          <li><strong>Email:</strong> ${customerInfo.email}</li>
          <li><strong>Phone:</strong> ${customerInfo.phone}</li>
          <li><strong>Address:</strong> ${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zip}</li>
        </ul>

        <h3>Order Items:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead style="background-color: #f5f5f5;">
            <tr>
              <th style="padding: 10px; text-align: left;">Puppy Name</th>
              <th style="padding: 10px; text-align: left;">Quantity</th>
              <th style="padding: 10px; text-align: left;">Price</th>
              <th style="padding: 10px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsHtml}
          </tbody>
        </table>

        <h3>Order Summary:</h3>
        <ul>
          <li><strong>Total Amount:</strong> $${totalAmount}</li>
          <li><strong>Payment Method:</strong> ${paymentMethod}</li>
          <li><strong>Status:</strong> Pending</li>
        </ul>

        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          This order was placed on ${new Date().toLocaleString()}
        </p>
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Order Confirmation</h2>
        <p>Hi ${customerInfo.name},</p>
        <p>Thank you for your order! We've received your purchase and will process it shortly.</p>

        <h3>Order Details:</h3>
        <p><strong>Order Number:</strong> ${order.order_number}</p>
        
        <h3>Items Ordered:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead style="background-color: #f5f5f5;">
            <tr>
              <th style="padding: 10px; text-align: left;">Puppy Name</th>
              <th style="padding: 10px; text-align: left;">Quantity</th>
              <th style="padding: 10px; text-align: left;">Price</th>
              <th style="padding: 10px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsHtml}
          </tbody>
        </table>

        <h3>Order Summary:</h3>
        <ul>
          <li><strong>Total Amount:</strong> $${totalAmount}</li>
          <li><strong>Payment Method:</strong> ${paymentMethod}</li>
        </ul>

        <p style="margin-top: 20px;">
          We'll contact you soon at ${customerInfo.phone} or ${customerInfo.email} with payment details and next steps.
        </p>

        <p style="margin-top: 20px; color: #666;">
          Best regards,<br/>
          Dachshund Haven<br/>
          support@dachshundpuppiesonline.shop
        </p>
      </div>
    `

    await sendEmail({
      to: process.env.ADMIN_EMAIL || "support@dachshundpuppiesonline.shop",
      subject: `New Order: ${order.order_number}`,
      html: adminEmailHtml,
    })

    await sendEmail({
      to: customerInfo.email,
      subject: "Order Confirmation - Dachshund Haven",
      html: customerEmailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email notification" }, { status: 500 })
  }
}
