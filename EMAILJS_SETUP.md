# EmailJS Setup Guide

The contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables in your email template:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{from_email}}
```

4. Set the **To Email** field to your email address (e.g., `sidm@umd.edu`)
5. Save the template and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Copy your **Public Key** (also called API Key)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials
4. **Important**: Make sure `.env` is in your `.gitignore` file to keep your keys secure

## Step 6: Restart Your Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox - you should receive the message!

## Troubleshooting

- If you get an error about EmailJS not being configured, make sure:
  - Your `.env` file exists in the root directory
  - The environment variable names start with `VITE_`
  - You've restarted your dev server after creating the `.env` file
  - Your credentials are correct

- For production deployment, make sure to add these environment variables to your hosting platform's environment variable settings.

