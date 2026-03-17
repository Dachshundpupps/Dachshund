import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/brevo"

export async function POST(request: Request) {
  try {
    const { name, email, phone, preferredDate, preferredTime, message } = await request.json()

    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Format appointment details for email
    const appointmentDate = new Date(preferredDate)
    const formattedDate = appointmentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const emailSubject = `New Appointment Request from ${name}`

    // Email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Appointment Request</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>

        <h3>Appointment Details:</h3>
        <ul>
          <li><strong>Preferred Date:</strong> ${formattedDate}</li>
          <li><strong>Preferred Time:</strong> ${preferredTime}</li>
          <li><strong>Appointment Fee:</strong> $300</li>
        </ul>

        <h3>Additional Message:</h3>
        <p>${message || "No additional message"}</p>

        <h3>Next Steps:</h3>
        <ol>
          <li>Review the appointment request</li>
          <li>Contact the customer to confirm availability</li>
          <li>Discuss payment options</li>
          <li>Send payment instructions</li>
        </ol>

        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          Received on ${new Date().toLocaleString()}
        </p>
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Request Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for requesting an appointment to view our puppies! We've received your request and will contact you shortly to confirm.</p>

        <h3>Your Appointment Details:</h3>
        <ul>
          <li><strong>Preferred Date:</strong> ${formattedDate}</li>
          <li><strong>Preferred Time:</strong> ${preferredTime}</li>
          <li><strong>Appointment Fee:</strong> $300 (credited toward purchase or refundable)</li>
        </ul>

        <p style="margin-top: 20px;">
          Our team will contact you at ${phone} or ${email} within 24 hours to confirm your appointment and discuss payment options.
        </p>

        <p style="margin-top: 20px; color: #666;">
          Best regards,<br/>
          Dachshund Haven<br/>
          support@dachshundpuppiesonline.shop
        </p>
      </div>
    `

    let adminEmailSent = false
    let customerEmailSent = false
    let appointmentEmailError: string | null = null

    const adminEmails =
      [process.env.ADMIN_EMAIL, process.env.ADMIN_EMAIL_2]
        .filter(Boolean) // Remove undefined/null values
        .join(",") || "support@dachshundpuppiesonline.shop"

    try {
      await sendEmail({
        to: adminEmails,
        subject: emailSubject,
        html: adminEmailHtml,
      })
      adminEmailSent = true
      console.log("Appointment admin email sent successfully")
    } catch (error) {
      console.error("Failed to send admin appointment email:", error)
      appointmentEmailError = "Failed to send admin notification"
    }

    try {
      await sendEmail({
        to: email,
        subject: "Appointment Request Confirmation",
        html: customerEmailHtml,
      })
      customerEmailSent = true
      console.log("Appointment customer email sent successfully")
    } catch (error) {
      console.error("Failed to send customer appointment email:", error)
      if (!appointmentEmailError) {
        appointmentEmailError = "Failed to send customer confirmation"
      }
    }

    // Only fail if both emails failed
    if (!adminEmailSent && !customerEmailSent) {
      return NextResponse.json(
        { success: false, error: appointmentEmailError || "Failed to send appointment emails" },
        { status: 500 },
      )
    }

    // Send to Zapier webhook for appointment notifications
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/25338530/u8hytef/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "appointment",
          name,
          email,
          phone,
          preferredDate: formattedDate,
          preferredTime,
          message,
          timestamp: new Date().toISOString(),
          subject: emailSubject,
          body: `NEW APPOINTMENT REQUEST

CUSTOMER INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone}

APPOINTMENT DETAILS:
Preferred Date: ${formattedDate}
Preferred Time: ${preferredTime}
Appointment Fee: $300

ADDITIONAL MESSAGE:
${message || "No additional message"}

---
This is an automatic notification from dachshundpuppiesonline.shop

NEXT STEPS:
1. Review the appointment request
2. Contact the customer at ${email} or ${phone} to confirm availability
3. Discuss payment options (Apple Pay, Chime, Zelle, Cash App, Card)
4. Send payment instructions and appointment confirmation

---
Appointment Website: support@dachshundpuppiesonline.shop`,
        }),
      })
    } catch (webhookError) {
      console.error("Zapier webhook error:", webhookError)
      // Continue even if webhook fails
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request submitted successfully",
      appointmentData: {
        name,
        email,
        phone,
        preferredDate: formattedDate,
        preferredTime,
        message,
      },
    })
  } catch (error) {
    console.error("Appointment submission error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit appointment request" }, { status: 500 })
  }
}
