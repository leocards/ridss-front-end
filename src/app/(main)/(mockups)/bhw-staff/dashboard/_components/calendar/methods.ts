
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInMonth(year: number, month: number): number {
    if (month === 1) { // February (0-based index: 1 = February)
        return isLeapYear(year) ? 29 : 28;
    }
    return DAYS_IN_MONTH[month];
}

export function getDayOfWeek(year: number, month: number, day: number): number {
    // Adjust month and year for Jan/Feb
    if (month < 2) {
        month += 12;
        year -= 1;
    }

    const q = day;
    const m = month + 1; // Zeller uses March=3, ... February=14
    const k = year % 100; // year of the century
    const j = Math.floor(year / 100); // zero-based century

    const h = (q + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;
    return ((h + 6) % 7); // Convert so 0 = Sunday, 6 = Saturday
}

export type CalendarDay = {
  day: number;
  month: number; // 0-11
  year: number;
  inCurrentMonth: boolean;
};

export function generateMonthCalendar(year: number, month: number): CalendarDay[][] {
    const daysInCurrentMonth = getDaysInMonth(year, month);
    const firstDay = getDayOfWeek(year, month, 1);

    // Get previous month details
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    const weeks: CalendarDay[][] = [];
    let currentWeek: CalendarDay[] = [];

    // Fill in previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
        currentWeek.push({
        day: daysInPrevMonth - i,
        month: prevMonth,
        year: prevYear,
        inCurrentMonth: false,
        });
    }

    // Fill in current month days
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        currentWeek.push({
        day,
        month,
        year,
        inCurrentMonth: true,
        });

        if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
        }
    }

    // Fill in next month's leading days
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    let dayCounter = 1;
    while (currentWeek.length > 0 && currentWeek.length < 7) {
        currentWeek.push({
        day: dayCounter++,
        month: nextMonth,
        year: nextYear,
        inCurrentMonth: false,
        });
    }
    if (currentWeek.length > 0) weeks.push(currentWeek);

    // Ensure we always have 6 rows (optional, good for consistent UI)
    while (weeks.length < 6) {
        const extraWeek: CalendarDay[] = [];
        for (let i = 0; i < 7; i++) {
        extraWeek.push({
            day: dayCounter++,
            month: nextMonth,
            year: nextYear,
            inCurrentMonth: false,
        });
        }
        weeks.push(extraWeek);
    }

    return weeks;
}