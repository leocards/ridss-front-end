"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Calendar from "../../dashboard/_components/calendar/calendar";
import { useState } from "react";
import EventList from "./event-list";
import EventForm from "./event-form";

export default function EventCalendar() {
    const [open, setOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);

    return (
        <div className="grid grow max-h -120 shadow-xs border border-border rounded-md">
            <Calendar
                onSelectDate={() => setOpen(true)}
                eventDates={[{ day: 13, month: 10, year: new Date().getFullYear(), inCurrentMonth: false }]}
            />

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="w-full gap-0 lg:max-w-xl" onOpenAutoFocus={(e) => e.preventDefault()}>
                    <SheetHeader>
                        <SheetTitle className="text-lg">Immunization Schedule</SheetTitle>
                        <SheetDescription className="hidden" />
                    </SheetHeader>

                    <div className="px-2">
                        {!isNew && <EventList onClickNew={setIsNew} />}
                        {isNew && <EventForm onCloseNewSchedule={setIsNew} />}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
