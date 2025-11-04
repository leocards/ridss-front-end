import { Button } from "@/components/ui/button";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/components/ui/dropdown";
import { CalendarIcon, ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { MONTHS } from "./methods";
import { useState } from "react";
import { defaultDate, useCalendar } from "./calendar-provider";

const CalendarHeader = () => {
    const [yearsList, setYearsList] = useState(2020);
    const { calendar, setCalendar, setSelectedDate } = useCalendar();

    const onNextPrevMonths = (nav: "nxt" | "prev") => {
        const m = calendar.month;
        const y = calendar.year;

        if (nav === "nxt") {
            let next_m = m + 1; // get the next month
            if (next_m <= 11) {
                // set the next month
                setCalendar({ ...calendar, month: next_m });
            } else {
                // set the next year if the month is 12 and set the month to 0 - January
                let next_y = y + 1; // get the next year
                setCalendar({ ...calendar, month: 0, year: next_y });
                // set the 8 year span from the year list
                if (next_y > yearsList) {
                    setYearsList(yearsList + 8);
                }
            }
        } else {
            let prev_m = m - 1; // get the previous month
            if (prev_m >= 0) {
                // set the previous month
                setCalendar({ ...calendar, month: prev_m });
            } else {
                // set the previous year if the month is -1 and set the month to 11 - December
                let prev_y = y - 1;
                setCalendar({ ...calendar, month: 11, year: prev_y });
                // set the 8 year span from the year list
                if (prev_y < yearsList) {
                    setYearsList(yearsList - 8);
                }
            }
        }
    };

    return (
        <div className="flex items-center p-2">
            <div className="flex grow gap-2 text-sm">
                <Dropdown dropdownId="months">
                    <DropdownTrigger className="active-scale h-9 rounded-sm">
                        {/* NOTE: Display list of months if possible for filtering calendars */}
                        {/* <span>Sep-Oct-Nov</span> */}
                        <span>{MONTHS[calendar.month]}</span>
                        <ChevronDown />
                    </DropdownTrigger>
                    <DropdownContent syncWidth={false} className="!w-32 p-1">
                        <div className="">
                            {MONTHS.map((m, index) => (
                                <DropdownItem
                                    key={index}
                                    active={index == calendar.month}
                                    className="h-7"
                                    onClick={() => setCalendar({ ...calendar, month: index })}
                                >
                                    {m}
                                </DropdownItem>
                            ))}
                        </div>
                    </DropdownContent>
                </Dropdown>
                <Dropdown dropdownId="years">
                    <DropdownTrigger className="active-scale h-9 rounded-sm">
                        <span>{calendar.year}</span>
                        <ChevronDown />
                    </DropdownTrigger>
                    <DropdownContent syncWidth={false} className="!w-24 p-1">
                        <Button
                            variant="ghost"
                            className="h-7 w-full py-0 text-xs"
                            onClick={() => setYearsList(yearsList - 8)}
                        >
                            <ChevronUp className="size-4.5" />
                        </Button>
                        <div className="">
                            {Array(8)
                                .fill(0)
                                .map((_, index) => (
                                    <DropdownItem
                                        key={index}
                                        active={yearsList + index == calendar.year}
                                        className="h-8"
                                        onClick={() => {
                                            setCalendar({ ...calendar, year: yearsList + index });
                                        }}
                                    >
                                        {yearsList + index}
                                    </DropdownItem>
                                ))}
                        </div>
                        <Button
                            variant="ghost"
                            className="h-7 w-full py-0 text-xs"
                            onClick={() => setYearsList(yearsList + 8)}
                        >
                            <ChevronDown className="size-4.5" />
                        </Button>
                    </DropdownContent>
                </Dropdown>
            </div>
            <div className="flex gap-2">
                <Button
                    size="icon"
                    variant="outline"
                    className="active-scale size-9 rounded-sm"
                    onClick={() => onNextPrevMonths("prev")}
                >
                    <ChevronLeft className="size-5" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    className="active-scale size-9 rounded-sm"
                    onClick={() => onNextPrevMonths("nxt")}
                >
                    <ChevronRight className="size-5" />
                </Button>

                <Button
                    variant="outline"
                    className="h-9 rounded-sm gap-3 ml-auto active-scale"
                    onClick={() => {
                        setSelectedDate({ ...defaultDate, inCurrentMonth: true })
                        setCalendar(defaultDate)
                    }}
                >
                    Today
                    <CalendarIcon />
                </Button>
            </div>
        </div>
    );
};

export default CalendarHeader;
