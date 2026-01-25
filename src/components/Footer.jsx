import './Footer.css'

function Footer() {
  return (
    <footer className="footer scroll-animate" data-animate="fade-in-up">
      <div className="footer-divider scroll-animate" data-animate="fade-in-scale"></div>
      <div className="footer-content">
        <p className="footer-name scroll-animate" data-animate="fade-in-up">Crofty's Sporting Collectibles & Things</p>
        <p className="footer-tagline scroll-animate" data-animate="fade-in-up">Authentic Cricket Memorabilia | Original Vinyl Records, etc</p>
        <div className="footer-contact-info scroll-animate" data-animate="fade-in-up">
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
        <p className="footer-copyright scroll-animate" data-animate="fade-in-up">© 2026 Colin E. H. Croft. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
