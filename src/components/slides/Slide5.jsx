import React from 'react'

const Slide5 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">OVERVIEW OF EXISTING WORK</h2>

      {/* Approaches Circle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">REACTIVE DETECTION</div>
          <div className="text-sm mt-2">AI detecting AI outputs</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">SOCIAL VERIFICATION</div>
          <div className="text-sm mt-2">Human vouching systems</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">BIOMETRIC</div>
          <div className="text-sm mt-2">Iris scans, facial recognition</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">BEHAVIORAL</div>
          <div className="text-sm mt-2">Continuous passive auth</div>
        </div>
        <div className="content-box-sm text-center">
          <div className="text-xl font-bold">REPUTATIONAL</div>
          <div className="text-sm mt-2">Credential-based identity</div>
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
              <td>Decentralized</td>
              <td>Vulnerable to manipulation</td>
            </tr>
            <tr>
              <td className="font-bold">Biometric</td>
              <td>Humanity = Biology</td>
              <td>High accuracy</td>
              <td>Privacy violations</td>
            </tr>
            <tr>
              <td className="font-bold">Behavioral</td>
              <td>Humanity = Patterns</td>
              <td>Seamless UX</td>
              <td>Total surveillance</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Trends */}
      <div className="content-box">
        <h3 className="text-2xl font-bold mb-3">TRENDS IN PREVIOUS RESEARCH</h3>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-0 text-base sm:text-lg md:text-xl">
          <div className="font-bold">Content Detection</div>
          <div className="text-3xl">→</div>
          <div className="font-bold">Identity Verification</div>
          <div className="text-3xl">→</div>
          <div className="font-bold">Privacy-Preserving Methods</div>
        </div>
      </div>
    </div>
  )
}

export default Slide5

