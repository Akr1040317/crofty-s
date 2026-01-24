import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Inquiries & Offers</h2>
          <p className="contact-intro">
            All items are available to serious collectors and enthusiasts. Please contact me directly to express 
            your interest and make offers. I welcome inquiries about individual pieces or collections.
          </p>
          
          <div className="contact-methods">
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>Email</h3>
              <a href="mailto:c.e.h.croft@gmail.com" className="contact-link">
                c.e.h.croft@gmail.com
              </a>
            </div>
            
            <div className="contact-card">
              <span className="contact-icon">☎️</span>
              <h3>Home Telephone</h3>
              <a href="tel:+13219725105" className="contact-link">
                +1 (321) 972-5105
              </a>
            </div>
            
            <div className="contact-card">
              <span className="contact-icon">📱</span>
              <h3>USA Mobile & WhatsApp</h3>
              <a href="tel:+13478854411" className="contact-link">
                +1 (347) 885-4411
              </a>
            </div>
          </div>
          
          <div className="contact-note">
            <p>
              <strong>Notes On Transactions:</strong> Upon agreement of terms, items will be carefully packaged 
              and shipped via FedEx, USPS, UPS, or DHL (whichever is applicable to your location) to your location worldwide.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Payment must be received and cleared before shipment. While conversations on the phone and email, instructions for transfer of fees will be provided.
            </p>
            <p style={{ marginTop: '1rem' }}>
              All items are sold as-is with authenticity guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
