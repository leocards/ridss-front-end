"use client"

import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { CalendarDays, List } from "lucide-react";
import Calendar from "./calendar/calendar";
import DashboardCard from "./dashboard-card";
import ViewDetailsOfImmunizationEvent from "./view-details-of-immunization-event";
import { useState } from "react";
import { CalendarDay } from "./calendar/methods";

export default function UpcommingImmunization() {
    const [selectedEventDate, setSelectedEventDate] = useState<CalendarDay|null>(null)

    return (
        <DashboardCard className="grid h-120 grid-rows-[auto_1fr] overflow-hidden">
            <div className="border-border flex h-13 items-center justify-between border-b pr-2 pl-3.5">
                <TypographySmall className="text-base font-bold">Upcoming Immunization</TypographySmall>

                <div className="bg-secondary flex rounded-sm p-1">
                    <Button size={"icon"} variant={"default"} className="size-7">
                        <CalendarDays />
                    </Button>
                    <Button size={"icon"} variant={"ghost"} className="size-7">
                        <List />
                    </Button>
                </div>
            </div>

            <Calendar
                eventDates={[
                    { day: 11, month: 10, year: 2025, inCurrentMonth: false },
                    { day: 12, month: 10, year: 2025, inCurrentMonth: false },
                ]}
                onClickDate={setSelectedEventDate}
            />

            <ViewDetailsOfImmunizationEvent date={selectedEventDate} open={!!selectedEventDate} onClose={() => setSelectedEventDate(null)} />
        </DashboardCard>
    );
}
