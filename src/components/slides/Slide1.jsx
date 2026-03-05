import React from 'react'

const Slide1 = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      {/* Title Box */}
      <div className="content-box w-full max-w-5xl mb-5 md:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-tight mb-0 border-b-0 pb-0">
          AUTHENTICITY AND ARBITRATION:
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl">
            A CONCEPTUAL FRAMEWORK FOR HUMAN
            <br />
            DIFFERENTIATION IN AGI-SATURATED
            <br />
            DIGITAL ECOSYSTEMS
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 md:mb-6">
        A Review Paper
      </div>

      {/* Team Info */}
      <div className="text-base sm:text-lg md:text-xl mb-4 text-center">
        <span className="font-bold">Team - 163</span>
        <br />
        <span className="text-sm sm:text-base md:text-lg">Bharath K • Lochan S • David Matikke Fonteh</span>
      </div>

      {/* University Info */}
      <div className="content-box-sm mt-4 md:mt-6 w-full md:w-auto">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold">JAIN UNIVERSITY</div>
          <div className="text-sm sm:text-base md:text-lg">Department of Computer Science (Data Analytics)</div>
          <div className="text-lg sm:text-xl font-bold mt-2">2025</div>
        </div>
      </div>
    </div>
  )
}

export default Slide1

