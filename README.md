# my-portfolio

## Contact Form Email Setup

This project supports EmailJS (preferred) and falls back to Formspree.

### Option A: EmailJS (recommended)

1. Create an account at `https://www.emailjs.com/` and add an Email Service (connect your email provider).
2. Create an Email Template with variables: `from_name`, `from_email`, `message`.
3. Get your IDs from EmailJS dashboard:
   - Service ID
   - Template ID
   - Public Key
4. Create a `.env` file in the project root and set:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
# optional override
# VITE_EMAILJS_API_URL=https://api.emailjs.com/api/v1.0/email/send
```

5. Restart the dev server.

The contact form will send via EmailJS when these variables are present.

### Option B: Formspree fallback

If EmailJS env vars are not provided, the form posts to Formspree. Replace the default endpoint in code or set your own endpoint.
