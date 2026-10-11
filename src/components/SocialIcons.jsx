import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { company } from '../config/company'

export default function SocialIcons({ size = 22, className = '' }) {
  const whatsappNumber = (company.whatsapp || company.phone || '').replace(/[^0-9]/g, '')

  const links = [
    {
      name: 'LinkedIn',
      href: company.social.linkedin,
      Icon: FaLinkedin,
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      href: company.social.instagram,
      Icon: FaInstagram,
      color: '#E1306C',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/${whatsappNumber}`,
      Icon: FaWhatsapp,
      color: '#25D366',
    },
  ]

  return (
    <div className={`social-icons ${className}`}>
      {links.map(({ name, href, Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="social-icon"
          style={{ color }}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}