import './Introduction.css'

function Introduction() {
  return (
    <section id="introduction" className="intro-section scroll-animate" data-animate="fade-in-up">
      <div className="intro-content">
        <div className="intro-text-content scroll-animate" data-animate="fade-in-left">
          <h2 className="intro-title">A Legacy of Cricket Excellence</h2>
          <p>
            Welcome to an exclusive collection of sporting history. Over decades of cricket at the highest level, 
            I have accumulated an extraordinary collection of authentic memorabilia, including over 50-75 full-sized 
            autographed team bats from West Indies home and touring teams, alongside other remarkable pieces of cricket heritage.
          </p>
          <div className="highlight-box scroll-animate" data-animate="fade-in-scale">
            <p>
              <strong>Important:</strong> All items are available for serious offers only. Prices are not listed—Interested 
              collectors should contact me directly on the email and telephone numbers provided to discuss their interest and make offers on individual pieces or collections.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Additionally, I maintain a collection of over 1,500 original vinyl records and CDs spanning various genres and eras, 
              currently being cataloged for serious music collectors. I also have videotapes of games in Sri Lanka.
            </p>
          </div>
        </div>
        <div className="intro-image-container scroll-animate" data-animate="slide-in-right">
          <img src="/History.jpeg" alt="Cricket History" className="intro-image" />
        </div>
      </div>
    </section>
  )
}

export default Introduction
