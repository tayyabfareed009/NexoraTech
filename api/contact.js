// Vercel serverless endpoint. Set RESEND_API_KEY in your host's environment settings.
export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })
  const { name, email, company = '', phone = '', service = '', budget = '', timeline = '', message } = request.body || {}
  if (!name || !email || !message) return response.status(400).json({ error: 'Name, email, and message are required.' })
  if (!/^\S+@\S+\.\S+$/.test(email)) return response.status(400).json({ error: 'Enter a valid email address.' })
  if (!process.env.RESEND_API_KEY) return response.status(503).json({ error: 'Email service has not been configured yet.' })
  const result = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL || 'Nexora Tech <onboarding@resend.dev>', to: ['nexorasoftworks@gmail.com'], reply_to: email, subject: `New Nexora project enquiry — ${name}`, text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nTimeline: ${timeline}\n\nMessage:\n${message}` }) })
  if (!result.ok) return response.status(502).json({ error: 'Could not send your message. Please try again.' })
  return response.status(200).json({ ok: true })
}
