"use client"

import dynamic from "next/dynamic"
import FairgroundMap from "./components/Fair"
import RoundaboutMap from "./components/Fair"

const FairMap = dynamic(() => import("../app/components/FairMap"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Gwalior Mela!</h1>
      <p className="text-center mb-8 text-lg">
        Explore our interactive map to discover all the exciting attractions, delicious food, and fun games at this
        years fair.
      </p>
      <RoundaboutMap />
    </main>
  )
}

