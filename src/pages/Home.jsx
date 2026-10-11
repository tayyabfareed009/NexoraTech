import IntroScreen from '../components/IntroScreen'
import EmberRain from '../components/EmberRain'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ServiceCarousel from '../components/ServiceCarousel'
import SocialIcons from '../components/SocialIcons'
import SocialRail from '../components/SocialRail'
import ProductShowcase from '../components/ProductShowcase'
import ProductWall from '../components/ProductWall'
import ProcessTimeline from '../components/ProcessTimeline'
import Logo from '../components/Logo'
import { company } from '../config/company'

/* ---------- Inline contact icons ---------- */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
       stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
       stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
       stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export default function Home() {
  return (
    <>
      <IntroScreen />
      <div id="top" className="site">
        <EmberRain />
        <Navbar />
        <main>
          {/* ---------- HERO ---------- */}
          <section className="hero">
            <div>
              <p className="kicker">
                <span />NEXORA SOFTWORKS / SOFTWARE STUDIO
              </p>
              <h1>
                Have an idea?
                <br />
                <em>Let's build it.</em>
              </h1>
              <p className="hero-text">
                We turn ideas into real apps, websites, and business tools.
                From the first sketch to a working product — we handle the
                design, the code, and the launch.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Start a project ↗
                </a>
                <a className="plain-link" href="#work">
                  See our work ↓
                </a>
              </div>
            </div>

            {/* ---------- ANIMATED PRODUCT SHOWCASE ---------- */}
            <div className="hero-console">
              <div className="console-top">
                <span>NX / SYSTEMS</span>
                <span>LIVE</span>
              </div>
              <ProductShowcase />
            </div>

            <p className="hero-foot">
              APPS · WEBSITES · AI · BUSINESS TOOLS{' '}
              <span>SCROLL TO EXPLORE ↓</span>
            </p>
          </section>

          {/* ---------- STATEMENT ---------- */}
          <section className="statement">
            <p className="kicker">NEXORA / BUILT WITH INTENT</p>
            <div>
              <h2>
                From a rough idea
                <br />
                to a <em>real product.</em>
              </h2>
              <p>
                Every good product starts with understanding the people who'll
                use it. We work closely with you — from planning to launch — so
                what we build actually solves your problem.
              </p>
            </div>
          </section>

          {/* ---------- CAPABILITIES ---------- */}
          <section id="capabilities" className="capabilities">
            <div className="section-heading">
              <p className="kicker">WHAT WE DO</p>
              <h2>
                Software for
                <br />
                <em>real life.</em>
              </h2>
              <p>
                Whatever you're building, we've probably worked on something
                close to it. Swipe through to see how we can help.
              </p>
            </div>
            <ServiceCarousel />
          </section>

          {/* ---------- WORK ---------- */}
          <section id="work" className="work">
            <div className="section-heading">
              <p className="kicker">SELECTED WORK</p>
              <h2>
                Products we're
                <br />
                <em>proud of.</em>
              </h2>
              <p>
                A few things we've shipped, plus some we're still building in
                the studio.
              </p>
            </div>
            <ProductWall />
          </section>

          {/* ---------- APPROACH ---------- */}
          <section id="approach" className="approach">
            <div className="section-heading">
              <p className="kicker">HOW WE WORK</p>
              <h2>
                Simple steps,
                <br />
                <em>no surprises.</em>
              </h2>
              <p>
                A clear process so you always know what's happening and what
                comes next.
              </p>
            </div>
            <ProcessTimeline />
          </section>

          {/* ---------- CONTACT ---------- */}
          <section id="contact" className="contact">
            <div className="contact-copy">
              <p className="kicker">GET IN TOUCH</p>
              <h2>
                Tell us what
                <br />
                <em>you want to build.</em>
              </h2>
              <p>
                Fill in the form or reach us directly. We'll get back to you
                with honest advice — no jargon, no pressure.
              </p>

              <div className="contact-details">
                <a href={`mailto:${company.email}`}>
                  <MailIcon />
                  <span>{company.email}</span>
                </a>
                <a href={`tel:${company.phone}`}>
                  <PhoneIcon />
                  <span>{company.phone}</span>
                </a>
                <span className="contact-location">
                  <PinIcon />
                  <span>{company.location}</span>
                </span>
              </div>

              <SocialIcons size={22} className="contact-social" />
            </div>
            <ContactForm />
          </section>
        </main>

        {/* ---------- FOOTER ---------- */}
        <footer>
          <div className="footer-top">
            <div>
              <a className="wordmark" href="#top">
                <Logo size={32} />
                NEXORA <span>SOFTWORKS</span>
              </a>
              <p>Software for what comes next.</p>
            </div>
            <div>
              <b>Explore</b>
              <a href="#capabilities">What we do</a>
              <a href="#work">Our work</a>
              <a href="#approach">How we work</a>
            </div>
            <div>
              <b>Get in touch</b>
              <a href={`mailto:${company.email}`}>
                <MailIcon />
                <span>{company.email}</span>
              </a>
              <a href={`tel:${company.phone}`}>
                <PhoneIcon />
                <span>{company.phone}</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Nexora Softworks. All rights reserved.</span>
            <span>Privacy · Terms</span>
          </div>
        </footer>

        {/* ---------- FLOATING RAIL (bottom-right on scroll) ---------- */}
        <SocialRail />
      </div>
    </>
  )
}