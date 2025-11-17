import React from 'react'

const Slide7 = () => {
  return (
    <div className="h-full">
      <h2 className="slide-title">COMPARATIVE ANALYSIS</h2>

      {/* Comparison Table */}
      <div className="content-box mb-6">
        <table className="table-brutalist text-base">
          <thead>
            <tr>
              <th className="text-lg">Methodology</th>
              <th className="text-lg">Usability</th>
              <th className="text-lg">Verification</th>
              <th className="text-lg">Freewill Risk</th>
              <th className="text-lg">Primary Limitation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">CAPTCHA</td>
              <td>⚫ Low</td>
              <td>⚪ Medium</td>
              <td>⚫ Low</td>
              <td>Cognitive overload</td>
            </tr>
            <tr>
              <td className="font-bold">Worldcoin</td>
              <td>⚫ High</td>
              <td>⚫ High</td>
              <td className="font-bold">⬤ Very High</td>
              <td>Invalid consent</td>
            </tr>
            <tr>
              <td className="font-bold">Social PoP</td>
              <td>⚫ Low</td>
              <td>⚪ Medium</td>
              <td>⚪ Medium</td>
              <td>Social manipulation</td>
            </tr>
            <tr>
              <td className="font-bold">Behavioral</td>
              <td>⚫ Very High</td>
              <td>⚫ High</td>
              <td className="font-bold">⬤ Very High</td>
              <td>Sub-perceptual surveillance</td>
            </tr>
            <tr>
              <td className="font-bold">Reputational</td>
              <td>⚪ Medium</td>
              <td>⚪ Medium</td>
              <td>⚪ Medium</td>
              <td>Chilling effect on speech</td>
            </tr>
          </tbody>
        </table>

        {/* Legend */}
        <div className="mt-4 flex gap-6 text-lg justify-center border-t-3 border-brutal-black pt-4">
          <div><span className="font-bold">⚫</span> High/Good</div>
          <div><span className="font-bold">⚪</span> Medium</div>
          <div><span className="font-bold">⬤</span> Critical Risk</div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="grid grid-cols-2 gap-6">
        <div className="content-box">
          <h3 className="text-xl font-bold mb-3 underline">METRICS EVALUATED</h3>
          <div className="space-y-2">
            <div className="bullet-point"><strong>Usability:</strong> User friction, cognitive load</div>
            <div className="bullet-point"><strong>Verification:</strong> Sybil-resistance, accuracy</div>
            <div className="bullet-point"><strong>Freewill Risk:</strong> Privacy invasion, coercion</div>
            <div className="bullet-point"><strong>Compliance:</strong> Legal/ethical validity</div>
          </div>
        </div>

        <div className="content-box bg-brutal-black text-brutal-white">
          <h3 className="text-xl font-bold mb-3 underline">KEY FINDINGS</h3>
          <div className="space-y-2">
            <div className="bullet-point">No methodology optimizes all three dimensions</div>
            <div className="bullet-point">Seamless systems sacrifice privacy</div>
            <div className="bullet-point">Privacy-preserving systems impose high friction</div>
            <div className="bullet-point">Biometric systems face severe legal challenges</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide7
