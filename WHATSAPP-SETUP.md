# WhatsApp Notification Setup Guide

This guide will help you set up WhatsApp notifications for new orders using Twilio.

## Prerequisites

- A Twilio account (sign up at https://www.twilio.com)
- A WhatsApp Business account connected to Twilio
- Your business WhatsApp number

## Step 1: Create a Twilio Account

1. Go to https://www.twilio.com and sign up for a free account
2. Verify your email and phone number
3. Navigate to the Twilio Console Dashboard

## Step 2: Set Up WhatsApp Sandbox (For Testing)

1. In the Twilio Console, go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. Follow the instructions to join the Twilio Sandbox:
   - Send a WhatsApp message to the Twilio number shown
   - Send the code provided (e.g., "join <your-code>")
3. Once connected, you'll receive a confirmation message

## Step 3: Get Your Twilio Credentials

1. From the Twilio Console Dashboard, find:
   - **Account SID** (starts with "AC...")
   - **Auth Token** (click to reveal)
2. Note the WhatsApp Sandbox number (e.g., "+1 415 523 8886")

## Step 4: Add Environment Variables

1. Go to your project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

\`\`\`
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+1234567890
\`\`\`

**Important Notes:**
- `TWILIO_WHATSAPP_FROM`: Use the Twilio Sandbox number (format: `whatsapp:+14155238886`)
- `TWILIO_WHATSAPP_TO`: Your personal WhatsApp number where you want to receive notifications (format: `whatsapp:+1234567890`)
- Make sure to include the `whatsapp:` prefix for both numbers

## Step 5: Deploy and Test

1. Redeploy your application
2. Place a test order on your website
3. You should receive a WhatsApp notification with the order details

## Step 6: Production Setup (Optional)

For production use, you'll need to:

1. Apply for WhatsApp Business API access through Twilio
2. Get your own WhatsApp Business number approved
3. Update the `TWILIO_WHATSAPP_FROM` environment variable with your approved number

## Troubleshooting

### Not receiving notifications?

1. Check that all environment variables are set correctly in your project settings
2. Verify your WhatsApp number is connected to the Twilio Sandbox
3. Check the application logs for any error messages
4. Ensure your phone number includes the country code (e.g., +1 for US)

### Message format issues?

- WhatsApp has character limits and formatting restrictions
- The current implementation uses basic text formatting
- Emojis are supported and help make messages more readable

## Cost Information

- Twilio Sandbox: Free for testing
- Production WhatsApp messages: ~$0.005 per message (varies by country)
- Check Twilio's pricing page for current rates: https://www.twilio.com/whatsapp/pricing

## Support

For Twilio-specific issues, visit:
- Twilio Documentation: https://www.twilio.com/docs/whatsapp
- Twilio Support: https://support.twilio.com
