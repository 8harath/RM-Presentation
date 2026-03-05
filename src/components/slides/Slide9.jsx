import React from 'react'

const Slide9 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">FUTURE SCOPE</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column: Gaps */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">CRITICAL RESEARCH GAPS IDENTIFIED</h3>

          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Usable Privacy-Preserving Frameworks</h4>
                <div className="text-base space-y-1">
                  <div><strong>Challenge:</strong> Systems are either usable-but-surveillant OR private-but-clunky</div>
                  <div><strong>Need:</strong> HCI research on Self-Sovereign Identity + Content Provenance</div>
                  <div><strong>Goal:</strong> Accessibility without social credit systems</div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Algorithmic-Age Consent Frameworks</h4>
                <div className="text-base space-y-1">
                  <div><strong>Challenge:</strong> 20th-century consent laws are inadequate</div>
                  <div><strong>Need:</strong> Legal-technical frameworks for sub-perceptual identification</div>
                  <div><strong>Question:</strong> How to ensure consent is genuinely informed and voluntary?</div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-box">
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Collaboration as Differentiation</h4>
                <div className="text-base space-y-1">
                  <div><strong>Challenge:</strong> Current discourse focuses on separating humans and AI</div>
                  <div><strong>Need:</strong> Study human-in-the-loop collaboration as the key differentiator</div>
                  <div><strong>Shift:</strong> From static verification to dynamic collaborative augmentation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Proposed Direction */}
        <div className="flex flex-col gap-4">
          <div className="content-box bg-brutal-black text-brutal-white h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">PROPOSED DIRECTION</h3>

            <div className="space-y-6 text-lg">
              <div className="border-b-3 border-white pb-4">
                <div className="text-center mb-2 text-base opacity-75">FROM</div>
                <div className="text-center text-2xl font-bold">AI versus Humans</div>
                <div className="text-center text-base">(Replacement)</div>
              </div>

              <div className="text-center text-4xl font-black">TO</div>

              <div className="border-t-3 border-white pt-4">
                <div className="text-center mb-2 text-base opacity-75">TO</div>
                <div className="text-center text-2xl font-bold">AI and Humans</div>
                <div className="text-center text-base">(Augmentation)</div>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-base">
              <div className="bullet-point">Build human-centered AI tools</div>
              <div className="bullet-point">Empower digital personhood management</div>
              <div className="bullet-point">Focus on authenticity and quality of life</div>
            </div>
          </div>

          <div className="content-box text-center">
            <div className="text-xl font-bold mb-4">PARADIGM SHIFT</div>
            <div className="flex justify-around items-center text-xl font-bold">
              <div className="content-box-sm">WALL</div>
              <div className="text-3xl">-&gt;</div>
              <div className="content-box-sm">BRIDGE</div>
            </div>
            <div className="mt-3 text-base">From separation mindset to collaborative ecosystem design</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide9
