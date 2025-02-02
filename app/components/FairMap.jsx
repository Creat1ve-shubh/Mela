"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for Leaflet's default icon path
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
})

export default function FairMap() {
  const [fairData, setFairData] = useState(null)

  useEffect(() => {
    async function fetchFairData() {
      const response = await fetch("/api/fair-data")
      const data = await response.json()
      setFairData(data)
    }
    fetchFairData()
  }, [])

  if (!fairData) return <div className="text-center py-10">Loading...</div>

  const center = [51.505, -0.09] // Example coordinates, adjust as needed
  const zoom = 17 // Adjust zoom level as needed

  return (
    <div className="h-[600px] w-full">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {fairData.map((booth) => (
          <Marker key={booth.id} position={[booth.lat, booth.lng]}>
            <Popup>
              <h3 className="font-bold">{booth.name}</h3>
              <p>{booth.description}</p>
              <p className="text-sm text-gray-600">{booth.type}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

