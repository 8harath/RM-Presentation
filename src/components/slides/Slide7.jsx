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
              <td>Low</td>
              <td>Medium</td>
              <td>Low</td>
              <td>Cognitive overload</td>
            </tr>
            <tr>
              <td className="font-bold">Worldcoin</td>
              <td>High</td>
              <td>High</td>
              <td>Very High</td>
              <td>Invalid consent concerns</td>
            </tr>
            <tr>
              <td className="font-bold">Social PoP</td>
              <td>Low</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>Social manipulation</td>
            </tr>
            <tr>
              <td className="font-bold">Behavioral</td>
              <td>Very High</td>
              <td>High</td>
              <td>Very High</td>
              <td>Sub-perceptual surveillance</td>
            </tr>
            <tr>
              <td className="font-bold">Reputational</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>Adoption complexity</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-2 gap-6">
        <div className="content-box">
          <h3 className="text-xl font-bold mb-3 underline">METRICS USED FOR COMPARISON</h3>
          <div className="space-y-2">
            <div className="bullet-point"><strong>Usability:</strong> User friction and cognitive load</div>
            <div className="bullet-point"><strong>Verification:</strong> Accuracy and Sybil-resistance</div>
            <div className="bullet-point"><strong>Freewill Risk:</strong> Privacy, autonomy, coercion</div>
            <div className="bullet-point"><strong>Compliance:</strong> Legal and ethical validity</div>
          </div>
        </div>

        <div className="content-box bg-brutal-black text-brutal-white">
          <h3 className="text-xl font-bold mb-3 underline">SIMILARITIES & DIFFERENCES</h3>
          <div className="space-y-2">
            <div className="bullet-point"><strong>Similarity:</strong> Every method has a clear trade-off profile</div>
            <div className="bullet-point"><strong>Similarity:</strong> No method optimizes all three core dimensions</div>
            <div className="bullet-point"><strong>Difference:</strong> Friction-heavy methods protect agency better</div>
            <div className="bullet-point"><strong>Difference:</strong> Seamless methods often increase surveillance risk</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide7
