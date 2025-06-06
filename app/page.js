
import Hero from "./components/Home/Hero";
import Problems from "./components/Home/Problem";
import Solution from "./components/Home/Solution";

export default function Home() {
  return (
    <main className="bg-black space-y-[10vh]">
   
      <Hero />
      <Problems />
      <Solution />
    </main>
  )
}

