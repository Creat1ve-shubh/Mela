export default function MapLegend() {
    const legendItems = [
      { type: "Food Court", color: "bg-red-200" },
      { type: "Ride", color: "bg-blue-200" },
      { type: "Game", color: "bg-yellow-200" },
      { type: "Exhibition", color: "bg-purple-200" },
      { type: "Entertainment", color: "bg-pink-200" },
      { type: "Attraction", color: "bg-orange-200" },
    ]
  
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Legend</h3>
        <div className="flex flex-wrap gap-4">
          {legendItems.map((item) => (
            <div key={item.type} className="flex items-center">
              <div className={`w-4 h-4 ${item.color} rounded mr-2`}></div>
              <span className="text-sm">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  