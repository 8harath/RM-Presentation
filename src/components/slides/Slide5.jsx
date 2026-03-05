import React from 'react'

const Slide5 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">OVERVIEW OF EXISTING WORK</h2>

      <div className="content-box mb-6">
        <h3 className="text-2xl font-bold mb-3">SUMMARY</h3>
        <div className="space-y-2 text-lg">
          <div className="bullet-point">Literature shifted from AI-output detection to identity verification</div>
          <div className="bullet-point">Most systems optimize security or usability, but rarely both with privacy</div>
          <div className="bullet-point">Current work converges on trade-off-driven, context-specific solutions</div>
        </div>
      </div>

      {/* Approaches */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">REACTIVE DETECTION</div>
          <div className="text-sm mt-2">AI models detect AI outputs</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">SOCIAL VERIFICATION</div>
          <div className="text-sm mt-2">Community vouching systems</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">BIOMETRIC</div>
          <div className="text-sm mt-2">Iris and facial uniqueness</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">BEHAVIORAL</div>
          <div className="text-sm mt-2">Continuous passive auth</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">REPUTATIONAL</div>
          <div className="text-sm mt-2">Identity plus credibility signals</div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="content-box mb-6">
        <h3 className="text-2xl font-bold mb-4">COMPARISON OF APPROACHES</h3>
        <table className="table-brutalist">
          <thead>
            <tr>
              <th className="text-lg">Approach</th>
              <th className="text-lg">Philosophy</th>
              <th className="text-lg">Strength</th>
              <th className="text-lg">Weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">Social</td>
              <td>Humanity = Consensus</td>
              <td>Decentralized trust</td>
              <td>Manipulable social graph</td>
            </tr>
            <tr>
              <td className="font-bold">Biometric</td>
              <td>Humanity = Biology</td>
              <td>High verification certainty</td>
              <td>Severe privacy concerns</td>
            </tr>
            <tr>
              <td className="font-bold">Behavioral</td>
              <td>Humanity = Patterns</td>
              <td>Low-friction UX</td>
              <td>Continuous surveillance</td>
            </tr>
            <tr>
              <td className="font-bold">Reputational</td>
              <td>Humanity = Credibility</td>
              <td>Context-aware identity</td>
              <td>Adoption complexity</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Trends */}
      <div className="content-box">
        <h3 className="text-2xl font-bold mb-3">TRENDS IN PREVIOUS RESEARCH</h3>
        <div className="flex justify-between items-center text-xl">
          <div className="font-bold">Content Detection</div>
          <div className="text-3xl">-&gt;</div>
          <div className="font-bold">Identity Verification</div>
          <div className="text-3xl">-&gt;</div>
          <div className="font-bold">Privacy-Aware Design</div>
        </div>
      </div>
    </div>
  )
}

export default Slide5
