import './App.css'

const contactEmail = 'contact@northcodesolutions.com'

const websiteLinks = [
  {
    className: 'titanium-link',
    href: 'https://titaniumdance.com',
    label: 'Open TitaniumDance.com',
  },
  {
    className: 'north-code-link',
    href: 'https://northcodesolutions.com',
    label: 'Open NorthCodeSolutions.com',
  },
  {
    className: 'bushman-link',
    href: 'https://bushmanhauling.com',
    label: 'Open BushmanHauling.com',
  },
]

function App() {
  return (
    <main className="landing-page">
      <div className="art-stage">
        <img
          className="home-art"
          src="/images/ncs-home.png"
          alt="North Code Solutions overview showing digital services, built websites, website design, mobile app development, backend systems, API integrations, and business automation tools."
        />

        {websiteLinks.map((link) => (
          <a
            aria-label={link.label}
            className={`website-hotspot ${link.className}`}
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
            title={link.label}
          />
        ))}
      </div>

      <div className="contact-panel" aria-label="Contact North Code Solutions">
        <p>Ready to build?</p>
        <a className="contact-button" href={`mailto:${contactEmail}`}>
          Contact North Code Solutions
        </a>
        <span>{contactEmail}</span>
      </div>
    </main>
  )
}

export default App
