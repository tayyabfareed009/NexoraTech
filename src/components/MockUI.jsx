export default function MockUI({ type }) {
  switch (type) {
    case 'shop':
      return <ShopUI />
    case 'dashboard':
      return <DashboardUI />
    case 'chat':
      return <ChatUI />
    case 'calendar':
      return <CalendarUI />
    case 'kanban':
      return <KanbanUI />
    case 'notes':
      return <NotesUI />
    default:
      return <ShopUI />
  }
}

function ShopUI() {
  return (
    <div className="mock mock-shop">
      <div className="mock-row">
        <div className="mock-thumb" />
        <div className="mock-thumb" />
      </div>
      <div className="mock-product">
        <div className="mock-img" />
        <div className="mock-lines">
          <span style={{ width: '70%' }} />
          <span style={{ width: '40%' }} />
        </div>
        <div className="mock-price">$48</div>
      </div>
      <div className="mock-btn">Add to cart</div>
    </div>
  )
}

function DashboardUI() {
  return (
    <div className="mock mock-dashboard">
      <div className="mock-kpi-row">
        <div className="mock-kpi"><small>Users</small><b>12.4k</b></div>
        <div className="mock-kpi"><small>Sales</small><b>3.8k</b></div>
      </div>
      <div className="mock-chart">
        <span style={{ '--h': '40%' }} />
        <span style={{ '--h': '65%' }} />
        <span style={{ '--h': '52%' }} />
        <span style={{ '--h': '88%' }} />
        <span style={{ '--h': '70%' }} />
        <span style={{ '--h': '95%' }} />
      </div>
      <div className="mock-line" />
      <div className="mock-line short" />
    </div>
  )
}

function ChatUI() {
  return (
    <div className="mock mock-chat">
      <div className="bubble left">Hi! How can I help?</div>
      <div className="bubble right">Where is my order?</div>
      <div className="bubble left">It ships tomorrow 🚚</div>
      <div className="mock-input">
        <span>Type a message…</span>
      </div>
    </div>
  )
}

function CalendarUI() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="mock mock-calendar">
      <div className="mock-cal-head">
        <small>March</small>
        <b>2026</b>
      </div>
      <div className="mock-cal-grid">
        {days.map((d, i) => (
          <span key={i} className="mock-cal-day">{d}</span>
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <span
            key={i}
            className={`mock-cal-cell ${i === 11 ? 'is-today' : ''} ${
              [3, 7, 16, 18].includes(i) ? 'has-dot' : ''
            }`}
          />
        ))}
      </div>
      <div className="mock-cal-event">09:30 — Consultation</div>
    </div>
  )
}

function KanbanUI() {
  return (
    <div className="mock mock-kanban">
      <div className="mock-col">
        <small>To do</small>
        <div className="mock-tile" />
        <div className="mock-tile" />
      </div>
      <div className="mock-col">
        <small>Doing</small>
        <div className="mock-tile tall" />
      </div>
      <div className="mock-col">
        <small>Done</small>
        <div className="mock-tile" />
        <div className="mock-tile" />
      </div>
    </div>
  )
}

function NotesUI() {
  return (
    <div className="mock mock-notes">
      <div className="mock-note">
        <b>Weekly plan</b>
        <span />
        <span className="short" />
      </div>
      <div className="mock-note">
        <b>Ideas</b>
        <span />
        <span />
        <span className="short" />
      </div>
      <div className="mock-note small">
        <b>Links</b>
        <span className="short" />
      </div>
    </div>
  )
}