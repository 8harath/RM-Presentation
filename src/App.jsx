import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide1 from './components/slides/Slide1'
import Slide2 from './components/slides/Slide2'
import Slide3 from './components/slides/Slide3'
import Slide4 from './components/slides/Slide4'
import Slide5 from './components/slides/Slide5'
import Slide6 from './components/slides/Slide6'
import Slide7 from './components/slides/Slide7'
import Slide8 from './components/slides/Slide8'
import Slide9 from './components/slides/Slide9'
import Slide10 from './components/slides/Slide10'
import Slide11 from './components/slides/Slide11'

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key >= '0' && e.key <= '9') {
        const slideNum = parseInt(e.key)
        if (slideNum >= 1 && slideNum <= slides.length) {
          goToSlide(slideNum - 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide]

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <div className="w-screen h-screen bg-brutal-black p-8 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.2, ease: 'easeOut' },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div className="slide-container h-full w-full p-12 overflow-auto">
              <CurrentSlideComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`nav-button ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ← Previous
        </button>

        <div className="flex items-center gap-4">
          <div className="slide-counter">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          {/* Slide Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 border-2 border-brutal-black transition-all ${
                  index === currentSlide ? 'bg-brutal-black' : 'bg-brutal-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`nav-button ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next →
        </button>
      </div>

      {/* Keyboard Hints */}
      <div className="text-brutal-white text-xs text-center mt-2 font-mono">
        Use ← → arrow keys or Space to navigate | Press 1-9 for quick slide access
      </div>
    </div>
  )
}

export default App
