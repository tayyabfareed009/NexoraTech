import { useState } from 'react'
import Logo from './Logo'

const links = [
  ['Capabilities', '#capabilities'],
  ['Work', '#work'],
  ['Approach', '#approach'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#top" className="wordmark">
        <Logo size={28} />
        NEXORA <span>SOFTWORKS</span>
      </a>

      <nav className={open ? 'open' : ''}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-button" href="#contact">
        Start a project ↗
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
      >
        <i />
        <i />
      </button>
    </header>
  )
}