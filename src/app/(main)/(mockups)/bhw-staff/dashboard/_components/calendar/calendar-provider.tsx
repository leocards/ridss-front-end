import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { CalendarDay } from "./methods";

type CALENDARTYPE = {
    selectedDate: CalendarDay
    setSelectedDate: (day: CalendarDay) => void;
    calendar: {
        day: number;
        month: number;
        year: number;
    };
    setCalendar: (date: {
        day: number;
        month: number;
        year: number;
    }) => void;
    onClickDate?: (day: CalendarDay|null) => void;
}

export const currentDate = new Date();
export const defaultDate = {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear()
}

const CalendarContext = createContext<CALENDARTYPE>({
    selectedDate: {
        ...defaultDate,
        inCurrentMonth: true
    },
    setSelectedDate: () => {},
    calendar: defaultDate,
    setCalendar: () => {}
})

type CalendarProviderProps = PropsWithChildren
export const CalendarProvider: React.FC<CalendarProviderProps> = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState<CalendarDay>({
        ...defaultDate, inCurrentMonth: true
    })
    const [calendarDate, setCalendarDate] = useState(defaultDate)

    

    return (
        <CalendarContext.Provider value={{ calendar: calendarDate, setCalendar: setCalendarDate, selectedDate, setSelectedDate }}>
            {children}
        </CalendarContext.Provider>
    )
}

export const useCalendar = () => {
    const context = useContext(CalendarContext)

    if(!context) {
        throw new Error('useCalendar must be used within CalendarProvider')
    }

    return context
}