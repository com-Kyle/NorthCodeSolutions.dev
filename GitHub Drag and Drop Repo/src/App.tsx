import './App.css'

const services = [
  {
    label: 'Website Builds',
    title: 'Clear sites that turn visitors into next steps',
    copy:
      'Practical websites built around what customers need to do: understand your offer, request a quote, book, contact you, or start an intake.',
  },
  {
    label: 'Custom APIs',
    title: 'Connections built for the way your business works',
    copy:
      'Purpose-built API layers for quoting tools, customer portals, booking flows, dashboards, forms, and internal systems that need clean data.',
  },
  {
    label: 'Webhook Automation',
    title: 'Your site can start the work automatically',
    copy:
      'Route form submissions, trigger notifications, update records, create tasks, and start follow-up workflows without manual copy-paste.',
  },
]

const outcomes = [
  'Cleaner lead intake',
  'Faster response times',
  'Fewer duplicate entries',
  'Connected forms and records',
  'Booking and quote workflows',
  'Practical launch support',
]

const process = [
  'Map the workflow',
  'Build the website',
  'Connect the systems',
  'Test and launch',
]

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="North Code Solutions home">
          <span className="brand-mark">N</span>
          <span>North Code Solutions</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Websites, APIs, and webhook automation</p>
          <h1>Websites that work like part of your operations.</h1>
          <p className="hero-lede">
            North Code Solutions builds practical websites for small businesses,
            then connects them to the tools, forms, APIs, and automations that
            keep work moving behind the scenes.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="mailto:hello@northcodesolutions.com">
              Book a Workflow Review
            </a>
            <a className="button secondary" href="#services">
              See What We Connect
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Website workflow preview">
          <img
            src="/images/ncs-workflow-hero.png"
            alt="A website dashboard connected to API and webhook workflow panels"
          />
        </div>
      </section>

      <section className="proof-strip" aria-label="Common workflow outcomes">
        {outcomes.map((outcome) => (
          <span key={outcome}>{outcome}</span>
        ))}
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Useful web systems, not just pages on the internet.</h2>
          <p>
            The site should explain the business. The systems behind it should
            remove friction from the work that happens after someone clicks send.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.label}>
              <p>{service.label}</p>
              <h3>{service.title}</h3>
              <span>{service.copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Built for operators</p>
          <h2>For teams with real workflows and too many manual handoffs.</h2>
        </div>
        <div className="operator-copy">
          <p>
            North Code Solutions is a fit when your website needs to do more
            than sit there. If leads need to reach the right inbox, quote
            details need to land in a dashboard, or bookings need to trigger
            follow-up, the build should account for that from the start.
          </p>
          <p>
            The goal is a dependable web presence with the right connections
            behind it: forms, notifications, records, APIs, webhooks, and
            practical admin flows that match how your business actually runs.
          </p>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>A straightforward path from idea to working system.</h2>
        </div>
        <ol>
          {process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Start with the workflow</p>
          <h2>Tell us what your website needs to handle.</h2>
        </div>
        <a className="button primary" href="mailto:hello@northcodesolutions.com">
          Start a Website Project
        </a>
      </section>
    </main>
  )
}

export default App
