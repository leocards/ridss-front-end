"use client"

import CalendarDays from "./calendar-days";
import CalendarWeeks from "./calendar-weeks";
import CalendarHeader from "./calendar-header";
import { CalendarProvider } from "./calendar-provider";
import { CalendarDay } from "./methods";

interface Props {
    eventDates?: CalendarDay[];
    onClickDate?: (day: CalendarDay|null) => void;
    onSelectDate?: (day: CalendarDay|null) => void;
}
export default function Calendar({ eventDates, onClickDate, onSelectDate }: Props) {
    return (
        <CalendarProvider>
            <div className="flex flex-col grow">
                <CalendarHeader />
                <div className="pb-2 grow grid grid-rows-[auto_1fr]">
                    <CalendarWeeks />
                    <CalendarDays eventDates={eventDates} onClickDate={onClickDate} onSelectDate={onSelectDate} />
                </div>
            </div>
        </CalendarProvider>
    )
}