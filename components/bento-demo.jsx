import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, MapIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/animated-list-demo";
import { BentoCard, BentoGrid } from "../components/bento-grid";
import { Marquee } from "@/components/marquee";
import { motion } from "framer-motion";

const files = [
  {
    name: "Food Fiesta",
    body: "Check out the new spicy food stalls in the north wing with live cooking shows!",
  },
  {
    name: "Craft Corner",
    body: "Local artists now displaying handmade jewelry and souvenirs.",
  },
  {
    name: "GameZone X",
    body: "New VR and arcade booths available today at Stall G7.",
  },
  {
    name: "Music Stage",
    body: "Open mic & local bands performing from 6PM daily.",
  },
  {
    name: "Lost & Found",
    body: "Visit booth B1 if you lost any personal belongings.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Live Booth Updates",
    description: "Stay updated with new stalls, offers, and vendor additions in real-time.",
    href: "#",
    cta: "Explore now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-300">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Fair Alerts",
    description: "Get real-time notifications for events, performances, and flash discounts.",
    href: "#",
    cta: "Get alerts",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo
        className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: MapIcon,
    name: "Interactive Map",
    description: "Navigate booths, food zones, and attractions with an animated map.",
    href: "#",
    cta: "Navigate",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo
        className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Event Schedule",
    description: "Check fair events, plan your visit and never miss a thing.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View dates",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2025, 5, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
    

      {/* Bento Grid */}
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
