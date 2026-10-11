import { useEffect, useState } from 'react'
import SocialIcons from './SocialIcons'

export default function SocialRail() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const distanceFromBottom = docHeight - (scrollTop + winHeight)

      // Show rail when within 400px of the bottom
      setVisible(distanceFromBottom < 400)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className={`social-rail ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <SocialIcons size={26} className="rail-icons" />
    </div>
  )
}