import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class based on data attribute or default to fade-in-up
          const animationType = entry.target.dataset.animate || 'fade-in-up'
          entry.target.classList.add(animationType)
          entry.target.style.opacity = '1'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Introduction />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
