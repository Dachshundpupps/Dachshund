import axios from "axios"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = "https://api.brevo.com/v3"

if (!BREVO_API_KEY) {
  console.error("Brevo API key not configured. Please add BREVO_API_KEY to environment variables.")
}

const brevoClient = axios.create({
  baseURL: BREVO_API_URL,
  headers: {
    "api-key": BREVO_API_KEY,
    "Content-Type": "application/json",
  },
})

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
    if (!BREVO_API_KEY) {
      console.error("Brevo API key not configured")
      throw new Error("Brevo API key not configured")
    }

    // Normalize to array
    const toEmails = Array.isArray(to) ? to : to.split(",").map((e) => e.trim())

    const fromEmail = process.env.BREVO_FROM_EMAIL || "support@dachshundpuppiesonline.shop"

    const response = await brevoClient.post("/smtp/email", {
      sender: {
        email: fromEmail,
        name: "Dachshund Haven",
      },
      to: toEmails.map((email) => ({ email })),
      subject,
      htmlContent: html || text,
      textContent: text,
    })

    console.log("Email sent successfully via Brevo:", response.data?.messageId)
    return { success: true, messageId: response.data?.messageId }
  } catch (error: any) {
    console.error("Brevo email error:", error.response?.data || error.message)
    // Return a proper error response instead of throwing
    // This prevents HTML error pages from being returned to the API
    return { success: false, error: error.message || "Failed to send email" }
  }
}
