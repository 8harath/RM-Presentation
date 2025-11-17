import React from 'react'

const Slide4 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">LITERATURE REVIEW</h2>

      <div className="grid grid-cols-2 gap-8 h-[calc(100%-80px)]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Research Methodology */}
          <div className="content-box">
            <h3 className="text-2xl font-bold mb-3 underline">RESEARCH METHODOLOGY</h3>
            <div className="space-y-2">
              <div className="bullet-point">Systematic review across multiple disciplines</div>
              <div className="bullet-point">Computer Science, Economics, Philosophy, Law, HCI</div>
            </div>
          </div>

          {/* Base Paper */}
          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-2xl font-bold mb-3">BASE PAPER</h3>
            <div className="text-lg leading-relaxed">
              <div className="font-bold mb-2">"Who Watches the Watchmen?"</div>
              <div className="text-base">
                A Review of Subjective Approaches for Sybil-Resistance in Proof of Personhood Protocols
              </div>
              <div className="mt-3 text-sm">
                Siddarth et al., <i>Frontiers in Blockchain</i> (2020)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Screening Funnel */}
          <div className="content-box h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold mb-6 underline">SCREENING PROCESS</h3>

            <div className="w-full space-y-4">
              <div className="text-center">
                <div className="text-6xl font-black">70+</div>
                <div className="text-xl font-bold">Papers Screened</div>
              </div>

              <div className="text-center text-5xl">▼▼▼</div>

              <div className="text-center">
                <div className="text-6xl font-black">27</div>
                <div className="text-xl font-bold">Peer-Reviewed Sources Selected</div>
              </div>

              <div className="border-t-4 border-brutal-black pt-4 mt-6">
                <h4 className="font-bold text-lg mb-2">KEY FOCUS AREAS:</h4>
                <div className="grid grid-cols-2 gap-2 text-base">
                  <div className="bullet-point">Proof of Personhood</div>
                  <div className="bullet-point">Biometric Systems</div>
                  <div className="bullet-point">Behavioral Auth</div>
                  <div className="bullet-point">Legal Frameworks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4
