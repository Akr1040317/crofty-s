import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      <div className="footer-content">
        <p className="footer-name">Crofty's Sporting Collectibles & Things</p>
        <p className="footer-tagline">Authentic Cricket Memorabilia | Vintage Vinyl Records</p>
        <div className="footer-contact-info">
          <p className="footer-contact-item">
            <a href="mailto:c.e.h.croft@gmail.com" className="footer-contact-link">c.e.h.croft@gmail.com</a>
          </p>
          <p className="footer-contact-item">
            <a href="tel:+13219725105" className="footer-contact-link">+1 (321) 972-5105</a>
          </p>
          <p className="footer-contact-item">
            <a href="tel:+13478854411" className="footer-contact-link">+1 (347) 885-4411</a>
          </p>
        </div>
        <p className="footer-copyright">© 2026 Colin E. H. Croft. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
