import React from "react";
import { WEEKDAYS } from "./methods";

const CalendarWeeks = () => {
	return (
        <div className="h-10 grid grid-cols-7 px-2">
            {WEEKDAYS.map((week) => (
                <div key={week} className="flex items-center justify-center font-medium text-muted-foreground">{week}</div>
            ))}
        </div>
    );
};

export default CalendarWeeks;
