import React from 'react'

const Slide3 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">PROBLEM STATEMENT</h2>

      {/* Main Crisis Box */}
      <div className="content-box mb-6">
        <h3 className="text-3xl font-bold mb-4">THE CRISIS OF DIFFERENTIATION</h3>
        <div className="space-y-2 text-xl">
          <div className="bullet-point">Traditional human-AI boundaries increasingly ambiguous</div>
          <div className="bullet-point">Loss of practical heuristics for navigating digital authenticity</div>
        </div>
      </div>

      {/* Three Boxes Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Research Gap */}
        <div className="content-box">
          <h3 className="text-xl font-bold mb-3 underline">RESEARCH GAP</h3>
          <div className="space-y-2 text-lg">
            <div className="bullet-point">Verification solutions may be as harmful as the problem</div>
            <div className="bullet-point">
              <span className="font-bold text-2xl">56%</span> of AI experts: AGI won't prioritize human control by 2035
            </div>
            <div className="bullet-point">Algorithms designed to shape users toward predictability</div>
          </div>
        </div>

        {/* Central Tension */}
        <div className="content-box bg-brutal-black text-brutal-white">
          <h3 className="text-xl font-bold mb-3 underline">CENTRAL TENSION</h3>
          <div className="space-y-4 text-lg">
            <div className="text-center">
              <div className="font-bold text-xl mb-2">NEED:</div>
              <div>Verify humanity in digital spaces</div>
            </div>
            <div className="text-center text-3xl">⇅</div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2">RISK:</div>
              <div>Sacrifice privacy, agency & autonomy</div>
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div className="content-box">
          <h3 className="text-xl font-bold mb-3 underline">MOTIVATION</h3>
          <div className="space-y-2 text-lg">
            <div className="bullet-point">No consensus on what "Proof of Personhood" means</div>
            <div className="bullet-point">Current systems force unacceptable trade-offs</div>
            <div className="bullet-point">Urgent need for conceptual framework</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide3

