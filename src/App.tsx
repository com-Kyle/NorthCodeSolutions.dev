import './App.css'

const contactEmail = 'contact@northcodesolutions.com'

function App() {
  return (
    <main className="landing-page">
      <img
        className="home-art"
        src="/images/ncs-home.png"
        alt="North Code Solutions overview showing digital services, website design, mobile app development, backend systems, API integrations, and business automation tools."
      />

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
