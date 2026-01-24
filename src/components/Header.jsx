import './Header.css'

function Header() {
  return (
    <header id="header" className="header">
      <div className="header-content">
        <h1 className="header-title">CROFTY'S SPORTING COLLECTIBLES & THINGS</h1>
        <p className="header-subtitle">Authentic Cricket Memorabilia & Vinyl Records, etc</p>
        <div className="header-proprietor">
          <p className="proprietor-name">Colin E. H. Croft</p>
          <p className="proprietor-title">Former Guyana, Lancashire and West Indies International Cricketer</p>
          <p className="proprietor-lancashire">Lancashire CCC</p>
          <div className="header-contact-info">
            <p className="contact-info-item">
              <a href="mailto:c.e.h.croft@gmail.com" className="header-contact-link">c.e.h.croft@gmail.com</a>
            </p>
            <p className="contact-info-item">
              <a href="tel:+13219725105" className="header-contact-link">+1 (321) 972-5105</a>
            </p>
            <p className="contact-info-item">
              <a href="tel:+13478854411" className="header-contact-link">+1 (347) 885-4411</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
