import { CalendarIcon } from "lucide-react"
import dev from "../assets/dev.jpg"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button className="text-white text-xl bg-black ">Hover here!</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 ml-10">
                <div className="flex justify-between gap-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-center">Hello Visitor</h4>
                        <p className="text-sm">
                            This project is currently in development. If you have any questions or feedback, feel free to reach out!<br></br>
                            <span className="font-semibold font-sans">shubhshrivastavawork@gmail.com </span>
                        </p>
                        <div className="text-muted-foreground text-xs flex items-center justify-center mt-5">
                            <CalendarIcon className="inline mr-1" />
                            Last updated: 8 Jun 2025
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
