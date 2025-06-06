import React from 'react'

// Array of pain points to display in the marquee
const painpoints = [
  "Crowded Entry Points ...",
  "Long Waiting Lines",
  "Difficult Navigation",
  "Limited Parking",
  "Lack of Information",
  "Food Quality Issues",
  "Safety Concerns"
]

// Painpoints component renders two marquees: one left, one right
const Painpoints = () => {
  return (
    // Make parent a flex column to stack marquees vertically
    <div className="overflow-hidden w-full bg-black py-4 flex flex-col gap-2">
      {/* Left to right marquee */}
      <div className="w-full">
        <div className="inline-block animate-marquee">
          {painpoints.map((point, idx) => (
            <span
              key={idx}
              className="text-white text-3xl font-serif mx-8 inline-block"
            >
              {point}
            </span>
          ))}
          {painpoints.map((point, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-white text-3xl font-serif mx-8 inline-block"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
      {/* Right to left marquee */}
      <div className="w-full">
        <div className="inline-block animate-marquee-reverse">
          {painpoints.map((point, idx) => (
            <span
              key={`rev-${idx}`}
              className="text-white text-3xl mx-8 inline-block"
            >
              {point}
            </span>
          ))}
          {painpoints.map((point, idx) => (
            <span
              key={`rev-dup-${idx}`}
              className="text-white text-3xl mx-8 inline-block"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
      {/* Inline CSS for marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-reverse {
          display: inline-block;
          white-space: nowrap;
          animation: marquee-reverse 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default Painpoints
