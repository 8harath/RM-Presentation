import React from 'react'

const Slide11 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">REFERENCES</h2>

      <div className="grid grid-cols-2 gap-6 h-[calc(100%-80px)]">
        {/* Left Column */}
        <div className="content-box overflow-auto">
          <div className="space-y-4 text-base">
            <div>
              <span className="font-mono font-bold">[1]</span> Zhang, H., et al. (2019). Multi-modal Knowledge-aware Event Memory Network for Social Media Rumor Detection. <i>ACM Multimedia</i>.
            </div>

            <div>
              <span className="font-mono font-bold">[2]</span> Crothers, E., et al. (2023). Machine-generated text: A comprehensive survey of threat models and detection methods. <i>IEEE Access, 11</i>, 7792-7821.
            </div>

            <div>
              <span className="font-mono font-bold">[3]</span> Siddarth, D., et al. (2020). Who watches the watchmen? A review of subjective approaches for Sybil-resistance in Proof of Personhood Protocols. <i>Frontiers in Blockchain, 3</i>.
            </div>

            <div>
              <span className="font-mono font-bold">[4]</span> Korinek, A. (2024). Economic Policy Challenges for the Age of AI. <i>Journal of Economic Perspectives, 38</i>(1), 205-228.
            </div>

            <div>
              <span className="font-mono font-bold">[5]</span> Worldcoin. (2023). Worldcoin Whitepaper. https://worldcoin.org/whitepaper
            </div>

            <div>
              <span className="font-mono font-bold">[6]</span> National Privacy Commission of the Philippines. (2024). Cease and Desist Order against Worldcoin Foundation. NPC Case No. 24-001.
            </div>

            <div>
              <span className="font-mono font-bold">[7]</span> Buolamwini, J., & Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities. <i>PMLR, 81</i>, 77-91.
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Additional References Note */}
          <div className="content-box bg-brutal-black text-brutal-white">
            <h3 className="text-xl font-bold mb-3">COMPLETE REFERENCE LIST</h3>
            <div className="text-lg">
              <div className="mb-3">
                <strong className="text-3xl">27</strong> peer-reviewed sources
              </div>
              <div className="text-base">
                Full bibliography available in the complete review paper
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="content-box flex-1 flex flex-col justify-center items-center bg-brutal-gray-light">
            <div className="text-6xl font-black mb-6">Q & A</div>
            <div className="text-2xl font-bold text-center">
              QUESTIONS & DISCUSSION
            </div>
            <div className="mt-6 text-lg text-center">
              Thank you for your attention
            </div>
          </div>

          {/* Contact Info */}
          <div className="content-box-sm">
            <div className="text-center">
              <div className="font-bold text-lg">Team 163</div>
              <div className="text-sm mt-1">JAIN University</div>
              <div className="text-sm">Department of Computer Science</div>
              <div className="text-sm">(Data Analytics)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide11
