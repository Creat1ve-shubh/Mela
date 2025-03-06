"use client"

import RoundaboutMap from "./components/Fair"
import Footer from "./components/Footer"
import compass from '../app/assets/compass.png';
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <RoundaboutMap />
      <Footer />
    </main>
  )
}

