'use client';

import { Playfair_Display } from "next/font/google";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  MapPin,
  ParkingCircle,
  Info,
  Utensils,
  Users,
  ShieldAlert,
  Timer,
  WifiOff,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import wave from "../assets/wave.svg"; // Local SVG background image

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-playfair",
  display: "swap",
});

const pains = [
  {
    title: "Poor Navigation",
    disc: "Difficult to find stalls or navigate layout.",
    top: "12vh",
    left: "8vw",
    icon: <MapPin size={28} />,
  },
  {
    title: "Limited Parking",
    disc: "Not enough parking space for visitors.",
    top: "22vh",
    left: "20vw",
    icon: <ParkingCircle size={28} />,
  },
  {
    title: "Lack of Information",
    disc: "Event details not clearly available.",
    top: "8vh",
    left: "32vw",
    icon: <Info size={28} />,
  },
  {
    title: "Food Quality",
    disc: "Hygiene and variety often lacking.",
    top: "18vh",
    left: "45vw",
    icon: <Utensils size={28} />,
  },
  {
    title: "Crowded Entry",
    disc: "Long queues and slow check-in.",
    top: "10vh",
    left: "58vw",
    icon: <Users size={28} />,
  },
  {
    title: "Safety Issues",
    disc: "Emergency response is inadequate.",
    top: "24vh",
    left: "70vw",
    icon: <ShieldAlert size={28} />,
  },
  {
    title: "Long Waiting",
    disc: "Delays at food, rides, and restrooms.",
    top: "14vh",
    left: "83vw",
    icon: <Timer size={28} />,
  },
  {
    title: "Network Issues",
    disc: "Poor signal, affecting cashless payments.",
    top: "6vh",
    left: "90vw",
    icon: <WifiOff size={28} />,
  },
];

// Animation variants
const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function HoverProblems() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      {/* 🔆 Background Wave */}
      <Image
        src={wave}
        alt="Wave Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 brightness-150 contrast-125"
      />

      {/* 🌫️ Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-transparent pointer-events-none" />

      {/* 🧠 Heading with Motion */}
      <motion.div
        className="absolute top-1/2 left-1/4 z-20 transform -translate-x-1/2 -translate-y-1/2 text-center px-4"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className={`text-white  text-5xl md:text-6xl ${playfair.className}`}>
          Navigating a fair is{" "}
          <span className="underline underline-offset-4 decoration-wavy decoration-orange-400">
            HARD!
          </span>
        </h1>
        <p className="mt-3 text-lg text-gray-400 max-w-xl mx-auto">
          See how our visitors struggle with common fair problems — and how we
          solve them with better design and experience.
        </p>
      </motion.div>

      {/* 🔶 Decorative Trail */}
      <div className="absolute -top-12 left-0 w-full z-0">
        <Image
          src="/wave.svg"
          alt="Curved Trail"
          width={1600}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* 🧩 Pain Points with Animation */}
      {pains.map((pain, idx) => (
        <HoverCard key={idx}>
          <HoverCardTrigger asChild>
            <motion.div
              custom={idx}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-orange-500 bg-opacity-69 text-black shadow-md cursor-pointer hover:scale-110 transition-transform duration-200"
              style={{
                top: pain.top,
                left: pain.left,
              }}
            >
              {pain.icon}
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">{pain.title}</h4>
              <p className="text-sm text-muted-foreground">{pain.disc}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </section>
  );
}
