import { useState, useEffect } from 'react'
import './Gallery.css'

const galleryItems = [
  {
    emoji: '🏏',
    title: 'Airtel Champions League T-20 Finalists - Trinidad & Tobago (West Indies)',
    description: 'This 1st competition was won by New South Wales Blues (Australia). This 1st competition was the fore-runner of IPL T-20 competition.',
    category: 'CRICKET',
    image: '/bat.jpeg'
  },
  {
    emoji: '🏏',
    title: 'England Tour Bat - Signed',
    description: 'Authentic match bat signed by touring England team. Pristine condition with clear signatures from all team members.',
    category: 'CRICKET'
  },
  {
    emoji: '🎵',
    title: 'Vinyl Collection - Classic Rock',
    description: 'Curated selection of vintage vinyl records from the golden age of rock. Original pressings in excellent condition.',
    category: 'MUSIC'
  },
  {
    emoji: '🏏',
    title: 'Australian Tour Memorabilia',
    description: 'Signed bat from memorable Australia tour with complete squad signatures. Historic piece from an unforgettable series.',
    category: 'CRICKET'
  },
  {
    emoji: '🏏',
    title: 'County Cricket Collection',
    description: 'Lancashire County Cricket Club signed memorabilia. Features signatures from championship seasons and notable players.',
    category: 'CRICKET'
  },
  {
    emoji: '🎵',
    title: 'Jazz & Blues Vinyl',
    description: 'Rare jazz and blues recordings from legendary artists. Original pressings from the 1960s and 1970s in collectible condition.',
    category: 'MUSIC'
  }
]

function Gallery() {
  const [filter, setFilter] = useState('all')

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  useEffect(() => {
    // Re-animate gallery items when filter changes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animate || 'fade-in-up'
          entry.target.classList.add(animationType)
          entry.target.style.opacity = '1'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const items = document.querySelectorAll('.gallery-item.scroll-animate')
    items.forEach(item => {
      item.style.opacity = '0'
      item.classList.remove('fade-in-up', 'fade-in-scale', 'slide-in-right', 'fade-in-left')
      observer.observe(item)
    })

    return () => {
      items.forEach(item => observer.unobserve(item))
    }
  }, [filter])

  return (
    <section id="gallery" className="gallery-section scroll-animate" data-animate="fade-in-up">
      <div className="container">
        <div className="gallery-header scroll-animate" data-animate="fade-in-up">
          <h2 className="gallery-title">The Collection</h2>
          <p className="gallery-subtitle">Authentic Cricket Memorabilia & Collectibles</p>
          
          <div className="gallery-filter scroll-animate" data-animate="fade-in-scale">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Items
            </button>
            <button 
              className={`filter-button ${filter === 'CRICKET' ? 'active' : ''}`}
              onClick={() => setFilter('CRICKET')}
            >
              🏏 Cricketing Stuff
            </button>
            <button 
              className={`filter-button ${filter === 'MUSIC' ? 'active' : ''}`}
              onClick={() => setFilter('MUSIC')}
            >
              🎵 Vinyls/CDs/etc
            </button>
          </div>
        </div>
        <div className="gallery-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div 
                key={`${item.category}-${item.title}`} 
                className="gallery-item scroll-animate"
                data-animate="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`gallery-item-image ${item.image ? 'has-image' : ''}`}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="gallery-item-img" />
                  ) : (
                    <>
                      <span className="gallery-emoji">{item.emoji}</span>
                      <p className="photo-placeholder">Photo to be added</p>
                    </>
                  )}
                </div>
                <div className="gallery-item-details">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-description">{item.description}</p>
                  <span className="gallery-badge">{item.category}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="gallery-empty scroll-animate" data-animate="fade-in-scale">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
