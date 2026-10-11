const FORM_SUBMIT_EMAIL = 'nexorasoftworks@gmail.com'

const endpoint = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`

export async function sendContactMessage(payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      _subject: `New contact message from ${payload.name || 'a visitor'}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === 'false') {
    throw new Error(
      data.message || 'Your message could not be sent. Please try again.'
    )
  }

  return data
}