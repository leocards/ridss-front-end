import { CalendarDay, generateMonthCalendar } from "./methods";
import { useCalendar } from "./calendar-provider";
import { useEffect, useMemo, useState } from "react";
import Day from "./day";

const activeDate = "text-primary-foreground bg-primary border-transparent";
const inActiveDate = "bg-primary/15 border-transparent";
const prevMonth = "border-border hover:bg-secondary";

interface Props {
    onClickDate?: (day: CalendarDay|null) => void;
    onSelectDate?: (day: CalendarDay|null) => void;
    eventDates?: CalendarDay[];
}
export default function CalendarDays({ eventDates, onClickDate, onSelectDate }: Props) {
	const { calendar, selectedDate, setSelectedDate } = useCalendar();

	const days = useMemo(() => {
		return generateMonthCalendar(calendar.year, calendar.month);
	}, [calendar.month, calendar.year]);

	const todayDate = (calendardate: CalendarDay) => {
		let todate = new Date();
		return (
			calendardate.day == todate.getDate() &&
			calendardate.month == todate.getMonth() &&
			calendardate.year == todate.getFullYear()
		);
	};

	const onSelectedDate = (calendardate: CalendarDay) => {
		return (
			calendardate.day == selectedDate.day &&
			calendardate.month == selectedDate.month &&
			calendardate.year == selectedDate.year
		);
	};

	return (
		<div className="relative overflow-hidden px-2 grow grid">
			{days.map((week, index) => (
				<div key={index} className="grow grid grid-cols-7">
					{week.map((day, index) => (
						<Day
							key={index + day.day}
                            day={day}
							activeClass={
								todayDate(day) && onSelectedDate(day)
									? !day.inCurrentMonth
										? prevMonth
										: activeDate
									: todayDate(day)
									? inActiveDate
									: onSelectedDate(day)
									? !day.inCurrentMonth
										? "bg-primary border-transparent"
										: activeDate
									: "hover:bg-secondary border-transparent"
							}
                            activeEvent={eventDates?.some((d) => d.day == day.day && d.month == day.month && d.year == day.year) ?? false}
                            onSelectedDate={onSelectedDate}
                            onSelect={(d) => {
                                if(onSelectDate){
                                    onSelectDate(d)
                                    setSelectedDate(d);
                                }
                                if((eventDates?.some((d) => d.day == day.day && d.month == day.month && d.year == day.year) ?? false) === true)
                                    onClickDate?.(d);
                            }}
						/>
					))}
				</div>
			))}
		</div>
	);
}
