import React from 'react'

const Slide6 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">METHODOLOGIES REVIEWED</h2>

      <div className="space-y-4">
        {/* DetectGPT */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">1. DetectGPT (Reactive Detection)</h3>
              <p className="text-base mb-2">Statistical fingerprinting using probability curvature analysis</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="text-green-700">✓ No training data needed</span>
              <span className="text-red-700">✗ Adversarial evasion</span>
            </div>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">2. CAPTCHA (Challenge-Response)</h3>
              <p className="text-base mb-2">Cognitive-perceptual human tests</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="text-green-700">✓ Simple, widely deployed</span>
              <span className="text-red-700">✗ High friction, accessibility issues</span>
            </div>
          </div>
        </div>

        {/* Worldcoin */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">3. Worldcoin Iris Scanning (Biometric)</h3>
              <p className="text-base mb-2">Custom "Orb" hardware captures iris patterns with zero-knowledge proofs</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="text-green-700">✓ High accuracy, AI-safe</span>
              <span className="text-red-700">✗ Privacy violations, coercive incentives</span>
            </div>
          </div>
        </div>

        {/* Behavioral Biometrics */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">4. Behavioral Biometrics (Passive Auth)</h3>
              <p className="text-base mb-2">Typing rhythm, mouse patterns, touchscreen pressure - continuous monitoring</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="text-green-700">✓ Seamless, invisible to user</span>
              <span className="text-red-700">✗ Total surveillance, sub-perceptual control</span>
            </div>
          </div>
        </div>

        {/* Verification Pipeline */}
        <div className="content-box mt-6">
          <h3 className="text-xl font-bold mb-4">VERIFICATION PIPELINE</h3>
          <div className="flex justify-between items-center text-lg">
            <div className="content-box-sm flex-1 text-center mx-2">
              <div className="font-bold">USER</div>
            </div>
            <div className="text-3xl">→</div>
            <div className="content-box-sm flex-1 text-center mx-2">
              <div className="font-bold">VERIFICATION LAYER</div>
              <div className="text-sm mt-1">(Algorithm Choice)</div>
            </div>
            <div className="text-3xl">→</div>
            <div className="content-box-sm flex-1 text-center mx-2">
              <div className="font-bold">ACCESS DECISION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide6
