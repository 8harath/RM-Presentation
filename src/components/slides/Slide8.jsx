import React from 'react'

const Slide8 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">THE TRILEMMA (OUR CONTRIBUTION)</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Left: Triangle Diagram */}
        <div className="content-box flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-8 text-center">
            USABILITY-VERIFICATION-FREEWILL TRILEMMA
          </h3>

          {/* Triangle */}
          <div className="relative w-full h-80 flex items-center justify-center">
            {/* Top vertex */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 content-box-sm">
              <div className="font-bold text-lg">VERIFICATION</div>
              <div className="text-sm">(Security)</div>
            </div>

            {/* Bottom left vertex */}
            <div className="absolute bottom-0 left-0 content-box-sm">
              <div className="font-bold text-lg">USABILITY</div>
              <div className="text-sm">(Seamless UX)</div>
            </div>

            {/* Bottom right vertex */}
            <div className="absolute bottom-0 right-0 content-box-sm">
              <div className="font-bold text-lg">FREEWILL</div>
              <div className="text-sm">(Privacy)</div>
            </div>

            {/* Center text */}
            <div className="text-6xl font-black opacity-10">
              ▲
            </div>
          </div>

          <div className="mt-6 text-center font-bold text-xl border-t-4 border-brutal-black pt-4">
            Pick ANY TWO
          </div>
        </div>

        {/* Right: Trade-offs */}
        <div className="space-y-4">
          {/* Central Thesis */}
          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-xl font-bold mb-3">CENTRAL THESIS</h3>
            <p className="text-lg">
              Verification systems can optimize only <strong>TWO of THREE</strong> properties
            </p>
          </div>

          {/* Trade-off 1 */}
          <div className="content-box">
            <h3 className="text-lg font-bold mb-2">VERIFICATION + FREEWILL</h3>
            <div className="text-base">
              <strong>Result:</strong> Poor Usability
              <br />
              <strong>Examples:</strong> CAPTCHA, PGP encryption
              <br />
              <strong>Problem:</strong> High friction, cognitive overload
            </div>
          </div>

          {/* Trade-off 2 */}
          <div className="content-box bg-red-100 border-red-700">
            <h3 className="text-lg font-bold mb-2">VERIFICATION + USABILITY</h3>
            <div className="text-base">
              <strong>Result:</strong> Lost Freewill
              <br />
              <strong>Examples:</strong> Worldcoin, Behavioral Biometrics
              <br />
              <strong>Problem:</strong> Privacy violations, surveillance
            </div>
          </div>

          {/* Trade-off 3 */}
          <div className="content-box">
            <h3 className="text-lg font-bold mb-2">USABILITY + FREEWILL</h3>
            <div className="text-base">
              <strong>Result:</strong> No Verification
              <br />
              <strong>Examples:</strong> Pre-verification internet
              <br />
              <strong>Problem:</strong> Bot attacks, no security
            </div>
          </div>

          {/* Validation */}
          <div className="content-box bg-brutal-gray-light">
            <h3 className="text-lg font-bold mb-2">EMPIRICAL VALIDATION</h3>
            <div className="text-base">
              Worldcoin pursued Verification + Usability
              <br />
              Philippines NPC ruled: Invalid consent
              <br />
              <strong>Legal shutdown = Freewill protection via regulatory friction</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide8
