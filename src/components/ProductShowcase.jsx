import { useEffect, useState } from 'react'

const CODE_LINES = [
  { text: 'const app = createApp({', color: '#c586c0' },
  { text: '  name: "Nexora",', color: '#9cdcfe' },
  { text: '  stack: ["react", "vite"],', color: '#9cdcfe' },
  { text: '  deploy: () => ship()', color: '#ce9178' },
  { text: '})', color: '#c586c0' },
  { text: '', color: '' },
  { text: 'app.build()  // ✓ done', color: '#6a9955' },
]

export default function ProductShowcase() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines((n) => (n >= CODE_LINES.length ? 0 : n + 1))
    }, 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="showcase" aria-hidden="true">
      {/* ---------- PHONE ---------- */}
      <div className="showcase-phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-scroll">
            <div className="app-status">
              <span>9:41</span>
              <span>●●●</span>
            </div>
            <div className="app-greeting">
              <small>Welcome back</small>
              <b>Hi,Nexora Softworks</b>
            </div>
            <div className="app-card big">
              <small>Today</small>
              <b>3 tasks done</b>
              <div className="app-bar"><i style={{ width: '68%' }} /></div>
            </div>
            <div className="app-row">
              <div className="app-card small">
                <small>Team</small>
                <b>08</b>
              </div>
              <div className="app-card small">
                <small>Updates</small>
                <b>12</b>
              </div>
            </div>
            <div className="app-card list">
              <div className="app-list-item"><i /><span>Design review</span></div>
              <div className="app-list-item"><i /><span>API work</span></div>
              <div className="app-list-item"><i /><span>Deploy v1.2</span></div>
            </div>
            <div className="app-card big">
              <small>Progress</small>
              <b>Shipping soon</b>
            </div>
          </div>
        </div>
        <div className="phone-hand" />
      </div>

      {/* ---------- LAPTOP ---------- */}
      <div className="showcase-laptop">
        <div className="laptop-screen">
          <div className="code-window">
            <div className="code-titlebar">
              <i /><i /><i />
              <span>nexora-app / App.jsx</span>
            </div>
            <pre className="code-body">
              {CODE_LINES.map((line, i) => (
                <div
                  key={i}
                  className="code-line"
                  style={{
                    opacity: i < visibleLines ? 1 : 0.15,
                    color: line.color || '#9ca3af',
                  }}
                >
                  <span className="code-num">{String(i + 1).padStart(2, '0')}</span>
                  {line.text || ' '}
                  {i === visibleLines - 1 && <span className="caret" />}
                </div>
              ))}
            </pre>
          </div>
        </div>
        <div className="laptop-base" />
      </div>
    </div>
  )
}