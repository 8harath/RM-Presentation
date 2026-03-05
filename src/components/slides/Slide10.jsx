import React from 'react'

const Slide10 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">CONCLUSION</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Contributions */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">KEY CONTRIBUTIONS</h3>

          {/* Contribution 1 */}
          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Conceptual Framework</h4>
                <div className="text-base">
                  <div className="bullet-point">Usability-Verification-Freewill Trilemma explains fundamental conflicts</div>
                  <div className="bullet-point">Unifies HCI, technical, legal, and philosophical literature</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution 2 */}
          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Systematic Review</h4>
                <div className="text-base">
                  <div className="bullet-point">Surveyed 27 peer-reviewed sources across multiple disciplines</div>
                  <div className="bullet-point">Identified three incompatible definitions of "Proof of Personhood":
                    <div className="ml-6 mt-1">
                      <div>• Social consensus (PoH)</div>
                      <div>• Biological uniqueness (Worldcoin)</div>
                      <div>• Verified reputation (VeriTrust)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution 3 */}
          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Empirical Validation</h4>
                <div className="text-base">
                  <div className="bullet-point">Worldcoin legal case confirms Trilemma predictions</div>
                  <div className="bullet-point">Seamless + Secure = Privacy loss (legally non-viable)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Insight & Impact */}
        <div className="space-y-4">
          {/* Final Insight */}
          <div className="content-box bg-brutal-black text-brutal-white md:h-64 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-center">FINAL INSIGHT</h3>
            <div className="text-lg leading-relaxed text-center px-4">
              <p className="mb-4">
                Human differentiation lies <strong>NOT</strong> in static verification properties
              </p>
              <p className="text-2xl font-bold my-4">BUT</p>
              <p>
                in dynamic processes of <strong className="text-2xl">authenticity</strong> and <strong className="text-2xl">collaborative augmentation</strong>
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="content-box">
            <h3 className="text-xl font-bold mb-3 underline">IMPACT</h3>
            <div className="space-y-2 text-base">
              <div className="bullet-point">Provides decision framework for policymakers and system designers</div>
              <div className="bullet-point">Highlights urgent need for algorithmic-age consent laws</div>
              <div className="bullet-point">Shifts paradigm from verification to authentic collaboration</div>
            </div>
          </div>

          {/* Future */}
          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-xl font-bold mb-3 text-center">THE FUTURE</h3>
            <div className="text-center text-lg font-bold">
              Human-Centered AI
              <br />
              Empowering Digital Personhood
              <br />
              With Dignity
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide10

