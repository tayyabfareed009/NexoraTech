const FORM_SUBMIT_EMAIL = 'noexorasoftworks@gmail.com'

export async function sendContactMessage(payload) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`,
    {
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
    }
  )

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === 'false') {
    throw new Error(
      data.message || `Failed to send message (HTTP ${response.status})`
    )
  }

  return data
}