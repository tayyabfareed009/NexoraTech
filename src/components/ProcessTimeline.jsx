import { useEffect, useRef, useState } from 'react'

const PROCESS = [
  {
    title: 'Listen',
    text: 'We listen first — to you, your users, and your goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9" />
        <path d="M12 12v6a3 3 0 0 0 3 3" />
        <path d="M12 12v6a3 3 0 0 1-3 3" />
        <path d="M12 12h3" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Plan',
    text: 'We agree on what to build and how long it will take.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="18" rx="2" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    ),
  },
  {
    title: 'Design',
    text: 'We design the screens before writing the code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Build',
    text: 'We build it clean, so it lasts and stays easy to change.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
  },
  {
    title: 'Test',
    text: 'We test the things your users will actually notice.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Launch',
    text: 'We launch, learn from real use, and keep improving.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
]

export default function ProcessTimeline() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState(0)
  const total = PROCESS.length

  const go = (dir) => setActive((i) => (i + dir + total) % total)
  const goTo = (i) => setActive(i)

  // Reveal on scroll
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Touch swipe
  const touchStart = useRef(null)
  const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchStart.current = null
  }

  return (
    <div
      ref={ref}
      className={`process-row ${inView ? 'is-in' : ''}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="process-track-wrap">
        <div
          className="process-track"
          style={{ '--active': active }}
        >
          {PROCESS.map((step, i) => (
            <article
              key={step.title}
              className={`process-card ${active === i ? 'is-active' : ''}`}
              onClick={() => i !== active && goTo(i)}
            >
              <div className="process-marker">
                <span className="process-num">0{i + 1}</span>
                <div className="process-icon">{step.icon}</div>
              </div>
              <div className="process-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="process-controls">
        <button onClick={() => go(-1)} aria-label="Previous step">←</button>
        <div className="process-dots">
          {PROCESS.map((step, i) => (
            <button
              key={step.title}
              className={active === i ? 'active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Go to step ${i + 1}: ${step.title}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next step">→</button>
      </div>
    </div>
  )
}