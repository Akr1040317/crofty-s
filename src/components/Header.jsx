import './Header.css'

function Header() {
  return (
    <header id="header" className="header">
      <div className="header-wrapper">
        <div className="header-image-container">
          <img src="/Intro.jpeg" alt="Colin E. H. Croft" className="header-image" />
        </div>
        <div className="header-content">
          <h1 className="header-title">CROFTY'S SPORTING COLLECTIBLES & THINGS</h1>
          <p className="header-subtitle">Authentic Cricket Memorabilia, Original Vinyl Records, etc<br />from the Collection of Colin E. H. Croft</p>
          <div className="header-proprietor">
            <p className="proprietor-title">Former Guyana, Lancashire CCC, and West Indies International Cricketer</p>
            <div className="header-contact-info">
              <div className="contact-info-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:c.e.h.croft@gmail.com" className="header-contact-link">c.e.h.croft@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon">☎️</span>
                <a href="tel:+13219725105" className="header-contact-link">+1 (321) 972-5105</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+13478854411" className="header-contact-link">+1 (347) 885-4411</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
