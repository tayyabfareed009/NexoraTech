import { useState, useEffect, useRef } from 'react'
import { services } from '../data/content'

export default function ServiceCarousel() {
  const [active, setActive] = useState(0)
  const total = services.length
  const touchStartX = useRef(null)

  const go = (dir) => {
    setActive((i) => (i + dir + total) % total)
  }

  const goTo = (i) => setActive(i)

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // touch swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }

  return (
    <div className="carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="carousel-stage">
        {services.map((s, i) => {
          // distance from active, wrapped so it loops
          let offset = i - active
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total

          const abs = Math.abs(offset)
          const isActive = offset === 0
          const isVisible = abs <= 1 // show only center + immediate neighbors

          const style = {
            '--offset': offset,
            '--abs': abs,
            '--accent': s.accent,
            transform: `
              translate(-50%, -50%)
              translateX(calc(var(--offset) * min(58%, 420px)))
              translateZ(calc(var(--abs) * -180px))
              rotateY(calc(var(--offset) * -28deg))
              scale(${isActive ? 1 : 0.82})
            `,
            opacity: isVisible ? 1 : 0,
            zIndex: 10 - abs,
            pointerEvents: isActive ? 'auto' : isVisible ? 'auto' : 'none',
          }

          return (
            <article
              key={s.id}
              className={`service-card ${isActive ? 'is-active' : ''}`}
              style={style}
              onClick={() => !isActive && goTo(i)}
              aria-hidden={!isVisible}
            >
              <div className="card-glow" />
              <div className="card-inner">
                <span className="card-index">
                  {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="card-stack">
                  {s.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {isActive && (
                  <a className="card-cta" href="#contact">
                    Start a project ↗
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>

      <div className="carousel-controls">
        <button onClick={() => go(-1)} aria-label="Previous">←</button>
        <div className="carousel-dots">
          {services.map((s, i) => (
            <button
              key={s.id}
              className={i === active ? 'active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.title}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next">→</button>
      </div>
    </div>
  )
}