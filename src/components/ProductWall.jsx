import { useState, useEffect, useRef } from 'react'
import ProductCard from './ProductCard'
import { projects } from '../data/content'

export default function ProductWall() {
  const [active, setActive] = useState(0)
  const total = projects.length
  const touchStart = useRef(null)

  const go = (dir) => setActive((i) => (i + dir + total) % total)
  const goTo = (i) => setActive(i)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchStart.current = null
  }

  const layout = []
  for (let i = 0; i < total; i++) {
    let offset = i - active
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total
    if (Math.abs(offset) <= 1) {
      layout.push({ project: projects[i], index: i, offset })
    }
  }

  return (
    <div className="coverflow" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="coverflow-stage">
        {layout.map(({ project, index, offset }) => (
          <ProductCard
            key={project.name}
            project={project}
            active={offset === 0}
            onClick={() => offset !== 0 && goTo(index)}
            style={{ '--offset': offset, '--abs': Math.abs(offset) }}
          />
        ))}
      </div>

      <div className="coverflow-controls">
        <button onClick={() => go(-1)} aria-label="Previous">←</button>
        <div className="coverflow-dots">
          {projects.map((p, i) => (
            <button
              key={p.name}
              className={i === active ? 'active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.name}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next">→</button>
      </div>
    </div>
  )
}