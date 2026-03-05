import React, { useState, useEffect, useRef } from 'react'
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
  const touchStartX = useRef(null)

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

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    const swipeThreshold = 60

    if (Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    touchStartX.current = null
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
    <div className="w-screen h-[100dvh] bg-brutal-black p-2 sm:p-4 md:p-6">
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slide-container h-full w-full p-4 sm:p-6 md:p-8 overflow-auto pb-28 md:pb-8">
              <CurrentSlideComponent />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Counter - Neobrutalism Style */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 slide-counter">
          {currentSlide + 1}/{slides.length}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute bottom-8 left-8 gap-4 z-30">
          <button
            type="button"
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Go to previous slide"
          >
            Previous
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            aria-label="Go to next slide"
          >
            Next
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav-bar md:hidden">
        <button
          type="button"
          className="nav-button nav-button-mobile"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Go to previous slide"
        >
          Previous
        </button>

        <div className="mobile-nav-status">
          <span className="mobile-nav-label">Slide</span>
          <span>{currentSlide + 1} of {slides.length}</span>
        </div>

        <button
          type="button"
          className="nav-button nav-button-mobile"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Go to next slide"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App

