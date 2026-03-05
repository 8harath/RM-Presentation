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
              <span className="font-bold">+ No training data needed</span>
              <span className="font-bold">- Vulnerable to adversarial evasion</span>
            </div>
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">2. CAPTCHA (Challenge-Response)</h3>
              <p className="text-base mb-2">Cognitive-perceptual human tests for bot filtering</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="font-bold">+ Simple and widely deployed</span>
              <span className="font-bold">- High friction and accessibility issues</span>
            </div>
          </div>
        </div>

        {/* Worldcoin */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">3. Worldcoin Iris Scanning (Biometric)</h3>
              <p className="text-base mb-2">Custom orb hardware captures iris patterns with proof of uniqueness</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="font-bold">+ High verification confidence</span>
              <span className="font-bold">- Privacy and consent concerns</span>
            </div>
          </div>
        </div>

        {/* Behavioral Biometrics */}
        <div className="content-box-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">4. Behavioral Biometrics (Passive Auth)</h3>
              <p className="text-base mb-2">Typing rhythm, mouse movement, and touch behavior monitoring</p>
            </div>
            <div className="flex gap-4 text-base">
              <span className="font-bold">+ Seamless user experience</span>
              <span className="font-bold">- Continuous surveillance risk</span>
            </div>
          </div>
        </div>

        {/* Verification Pipeline */}
        <div className="content-box mt-6">
          <h3 className="text-xl font-bold mb-4">ALGORITHM PIPELINE (BLOCK DIAGRAM)</h3>
          <div className="flex justify-between items-center text-lg">
            <div className="content-box-sm flex-1 text-center mx-2">
              <div className="font-bold">USER INPUT</div>
            </div>
            <div className="text-3xl">-&gt;</div>
            <div className="content-box-sm flex-1 text-center mx-2">
              <div className="font-bold">VERIFICATION ALGORITHM</div>
              <div className="text-sm mt-1">(Method Choice)</div>
            </div>
            <div className="text-3xl">-&gt;</div>
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
