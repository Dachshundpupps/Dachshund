import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[]
  subject: string
  html?: string
  text?: string
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key not configured. Please add RESEND_API_KEY to environment variables.")
      throw new Error("Resend API key not configured")
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "support@dachshundpuppiesonline.shop"

    const response = await resend.emails.send({
      from: fromEmail,
      to,
      subject,
      html: html || text,
    })

    if (response.error) {
      console.error("Resend email error:", response.error)
      throw new Error(`Resend error: ${response.error.message}`)
    }

    console.log("Email sent successfully via Resend:", response.data?.id)
    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}
