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

// Painpoints component renders a horizontally scrolling list of pain points
const Painpoints = () => {
  return (
    // Container with hidden overflow and black background
    <div className="overflow-hidden whitespace-nowrap w-full  bg-black py-4">
      {/* Marquee wrapper with animation */}
      <div className="inline-block animate-marquee">
        {/* Render each pain point */}
        {painpoints.map((point, idx) => (
          <span
            key={idx}
            className="text-white text-3xl mx-8 inline-block"
          >
            {point}
          </span>
        ))}
        {/* Duplicate the list for seamless looping */}
        {painpoints.map((point, idx) => (
          <span
            key={`dup-${idx}`}
            className="text-white text-3xl mx-8 inline-block"
          >
            {point}
          </span>
        ))}
      </div>
      {/* Inline CSS for marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default Painpoints
