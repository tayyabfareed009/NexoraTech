import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    // Skip on touch-only devices — no cursor there
    if (window.matchMedia('(hover: none)').matches) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const circle = { x: mouse.x, y: mouse.y }
    let rafId
    let hovering = false
    let pressed = false

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const isClickable = (el) => {
      if (!el) return false
      // Walk up the tree a couple of levels to catch nested elements
      let node = el
      for (let i = 0; i < 4 && node; i++, node = node.parentElement) {
        const tag = node.tagName
        if (
          tag === 'A' ||
          tag === 'BUTTON' ||
          tag === 'INPUT' ||
          tag === 'SELECT' ||
          tag === 'TEXTAREA' ||
          node.getAttribute('role') === 'button' ||
          node.classList?.contains('social-icon')
        ) {
          return true
        }
      }
      return false
    }

    const onOver = (e) => {
      hovering = isClickable(e.target)
    }

    const onDown = () => { pressed = true }
    const onUp = () => { pressed = false }

    // Loop: circle eases toward the mouse (the "chasing" effect)
    const tick = () => {
      circle.x += (mouse.x - circle.x) * 0.18
      circle.y += (mouse.y - circle.y) * 0.18

      const dot = dotRef.current
      const ring = circleRef.current
      if (dot) {
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
      if (ring) {
        const scale = (hovering ? 1.6 : 1) * (pressed ? 0.85 : 1)
        ring.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ring.classList.toggle('is-hover', hovering)
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={circleRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}