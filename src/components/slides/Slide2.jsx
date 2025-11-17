import React from 'react'

const Slide2 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">INTRODUCTION</h2>

      <div className="grid grid-cols-2 gap-6 h-[calc(100%-80px)]">
        {/* Background */}
        <div className="content-box">
          <h3 className="text-2xl font-bold mb-4 underline">BACKGROUND</h3>
          <div className="space-y-2">
            <div className="bullet-point">Proliferation of Artificial General Intelligence (AGI)</div>
            <div className="bullet-point">Erosion of ability to differentiate human from AI-generated content</div>
            <div className="bullet-point">Turing Test obsolescence – GPT-4 passes consistently</div>
          </div>
        </div>

        {/* Importance */}
        <div className="content-box">
          <h3 className="text-2xl font-bold mb-4 underline">IMPORTANCE</h3>
          <div className="space-y-2">
            <div className="bullet-point">Systemic loss of "Contextual Confidence" in digital communications</div>
            <div className="bullet-point">AI-generated misinformation harder to detect than human-authored</div>
            <div className="bullet-point">Threatens trust in social media, scientific publishing, online platforms</div>
          </div>
        </div>

        {/* Scope */}
        <div className="content-box">
          <h3 className="text-2xl font-bold mb-4 underline">SCOPE</h3>
          <div className="space-y-2">
            <div className="bullet-point">Focus: Social media and online gaming environments</div>
            <div className="bullet-point">Review: Proof of Personhood protocols, biometric systems, behavioral authentication</div>
          </div>
        </div>

        {/* Objective */}
        <div className="content-box">
          <h3 className="text-2xl font-bold mb-4 underline">OBJECTIVE</h3>
          <div className="space-y-2">
            <div className="bullet-point">Define human value in post-AGI economy</div>
            <div className="bullet-point">Analyze verification frameworks and their fundamental trade-offs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide2
