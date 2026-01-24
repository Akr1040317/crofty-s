import './Gallery.css'

const galleryItems = [
  {
    emoji: '🏏',
    title: 'West Indies Team Bat - 1984',
    description: 'Full-sized team bat signed by the legendary West Indies squad. Complete signatures from the golden era of Caribbean cricket.',
    category: 'CRICKET'
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
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">The Collection</h2>
          <p className="gallery-subtitle">Authentic Cricket Memorabilia & Collectibles</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-item-image">
                <span className="gallery-emoji">{item.emoji}</span>
                <p className="photo-placeholder">Photo to be added</p>
              </div>
              <div className="gallery-item-details">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-description">{item.description}</p>
                <span className="gallery-badge">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
