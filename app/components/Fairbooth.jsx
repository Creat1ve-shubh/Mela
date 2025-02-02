export default function FairBooth({ booth }) {
    const colorClass =
      {
        "Food Court": "bg-red-200 hover:bg-red-300",
        Ride: "bg-blue-200 hover:bg-blue-300",
        Game: "bg-yellow-200 hover:bg-yellow-300",
        Exhibition: "bg-purple-200 hover:bg-purple-300",
        Entertainment: "bg-pink-200 hover:bg-pink-300",
        Attraction: "bg-orange-200 hover:bg-orange-300",
      }[booth.type] || "bg-gray-200 hover:bg-gray-300"
  
    return (
      <div className={`p-3 rounded shadow ${colorClass} transition-colors duration-300 cursor-pointer`}>
        <h3 className="font-bold text-sm">{booth.name}</h3>
        <p className="text-xs mt-1">{booth.description}</p>
      </div>
    )
  }
  
  