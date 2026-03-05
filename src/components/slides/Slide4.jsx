import React from 'react'

const Slide4 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">LITERATURE REVIEW</h2>

      <div className="grid grid-cols-2 gap-6 h-[calc(100%-80px)]">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="content-box">
            <h3 className="text-2xl font-bold mb-3 underline">REVIEW METHOD</h3>
            <div className="space-y-2">
              <div className="bullet-point">Systematic review across AI, HCI, Law, and Economics</div>
              <div className="bullet-point">Databases: ACM, IEEE Xplore, Springer, arXiv</div>
              <div className="bullet-point">Context focus: social media and online gaming ecosystems</div>
            </div>
          </div>

          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-2xl font-bold mb-3">BASE PAPER</h3>
            <div className="text-lg leading-relaxed">
              <div className="font-bold mb-2">"Who Watches the Watchmen?"</div>
              <div className="text-base">
                A review of subjective approaches for Sybil-resistance in Proof of Personhood protocols
              </div>
              <div className="mt-3 text-sm">
                Siddarth et al., <i>Frontiers in Blockchain</i> (2020)
              </div>
            </div>
          </div>

          <div className="content-box-sm">
            <h4 className="text-xl font-bold mb-3 text-center">NO. OF PAPERS</h4>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="content-box-sm">
                <div className="text-4xl font-black">70+</div>
                <div className="text-sm font-bold">Screened</div>
              </div>
              <div className="content-box-sm bg-brutal-black text-brutal-white">
                <div className="text-4xl font-black">27</div>
                <div className="text-sm font-bold">Selected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 h-full">
          <div className="content-box overflow-auto">
            <h3 className="text-2xl font-bold mb-3 underline">LITERATURE TABLE TEMPLATE</h3>
            <table className="table-brutalist text-sm">
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Method</th>
                  <th>Key Finding</th>
                  <th>Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Siddarth et al. (2020)</td>
                  <td>Social PoP Review</td>
                  <td>Sybil resistance through social verification</td>
                  <td>Vulnerable to social manipulation</td>
                </tr>
                <tr>
                  <td className="font-bold">Worldcoin (2023)</td>
                  <td>Biometric PoP</td>
                  <td>High verification reliability</td>
                  <td>Consent and privacy concerns</td>
                </tr>
                <tr>
                  <td className="font-bold">Seto et al. (2014)</td>
                  <td>Behavioral Auth</td>
                  <td>Seamless continuous authentication</td>
                  <td>High surveillance risk</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-xl font-bold mb-3">SCREENING OUTPUT</h3>
            <div className="space-y-2 text-base">
              <div className="bullet-point">Interdisciplinary synthesis across technical and social frameworks</div>
              <div className="bullet-point">Direct comparison of usability, verification, and freewill trade-offs</div>
              <div className="bullet-point">Basis for the later comparative analysis and trilemma framing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4
