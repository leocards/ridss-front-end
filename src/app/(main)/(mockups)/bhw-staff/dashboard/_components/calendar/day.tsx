import { cn } from "@/lib/utils";
import { CalendarDay } from "./methods";

type Props = {
    day: CalendarDay;
    activeClass: string;
    activeEvent: boolean;
    onSelect: (day: CalendarDay) => void;
    onSelectedDate: (day: CalendarDay) => boolean;
}
export default function Day({ day, activeClass, activeEvent, onSelectedDate, onSelect }: Props) {
	return (
		<div
			className={cn(
				"flex items-center justify-center rounded-sm relative border grow",
				activeClass
			)}
			onClick={() => onSelect(day)}
		>
			<span
				className={cn(
					"pointer-events-none rounded-sm size-6.5 flex items-center justify-center",
					!day.inCurrentMonth &&
						(onSelectedDate(day)
							? "text-white"
							: "text-muted-foreground/60"),
					activeEvent && "bg-orange-500/30 [#FF8559]/45"
				)}
			>
				{day.day}
			</span>
		</div>
	);
}
