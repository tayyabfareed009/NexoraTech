import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function IntroScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="intro-screen" aria-label="Nexora Softworks">
      <div className="intro-mark">
        <Logo size={128} />
      </div>
      <p>
        NEXORA <span>SOFTWORKS</span>
      </p>
      <small>PRODUCTS / SYSTEMS / INTELLIGENCE</small>
      <div className="intro-progress" />
    </div>
  )
}