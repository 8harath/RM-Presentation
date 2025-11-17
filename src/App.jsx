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
      scale: 0.95,
      rotateY: direction > 0 ? 5 : -5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? -5 : 5,
    }),
  }

  return (
    <div className="w-screen h-screen bg-brutal-black p-6">
      {/* Slide Container */}
      <div className="h-full relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3, ease: 'easeInOut' },
              rotateY: { duration: 0.3, ease: 'easeInOut' },
            }}
            className="absolute inset-0"
          >
            <div className="slide-container h-full w-full p-8 overflow-auto">
              <CurrentSlideComponent />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Counter - Neobrutalism Style */}
        <div className="absolute top-8 right-8 slide-counter">
          {currentSlide + 1}/{slides.length}
        </div>
      </div>
    </div>
  )
}

export default App
