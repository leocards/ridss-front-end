import { TypographySmall } from "@/components/ui/typography";
import EventCalendar from "./_components/event-calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UsersRound } from "lucide-react";
import ScheduleCard from "./_components/schedule-card";

export default function Page() {
    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-cols-2 gap-3">
            <EventCalendar />
            <div className="shadow-xs border border-border rounded-md p-2">
                <div className="px-2 h-10 flex items-center">
                    <TypographySmall className="text-[15px] font-semibold">Immunization Schedule List</TypographySmall>
                </div>

                <div className="space-y-1.5 mt-2 overflow-y-auto">
                    <ScheduleCard />
                </div>
            </div>
        </div>
    )
}