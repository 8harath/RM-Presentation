import React from 'react'

const Slide1 = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* Title Box */}
      <div className="content-box max-w-5xl mb-8">
        <h1 className="text-5xl font-black text-center leading-tight mb-0 border-b-0 pb-0">
          AUTHENTICITY AND ARBITRATION:
          <br />
          <span className="text-4xl">
            A CONCEPTUAL FRAMEWORK FOR HUMAN
            <br />
            DIFFERENTIATION IN AGI-SATURATED
            <br />
            DIGITAL ECOSYSTEMS
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="text-3xl font-bold mb-6">
        A Review Paper
      </div>

      {/* Team Info */}
      <div className="text-xl mb-4 text-center">
        <span className="font-bold">Team - 163</span>
        <br />
        <span className="text-lg">Bharath K | Lochan S | David Matikke Fonteh</span>
      </div>

      {/* University Info */}
      <div className="content-box-sm mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold">JAIN UNIVERSITY</div>
          <div className="text-lg">Department of Computer Science (Data Analytics)</div>
          <div className="text-xl font-bold mt-2">2025</div>
        </div>
      </div>
    </div>
  )
}

export default Slide1

