import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { defaultDate, useCalendar } from "./calendar-provider";

export default function CalendarFooter() {
    const { setSelectedDate, setCalendar } = useCalendar()

	return (
		<div className="mt-3.5 p-2 pt-0 flex">
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
	);
}
