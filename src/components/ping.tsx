import { cn } from "@/lib/utils";

export interface VaccinePingProps {
    className?: string;
    absolute?: boolean;
    status?: 'shortage' | 'sufficient' | 'excess' | 'used'
}

export default function VaccinePing({ className, absolute, status = 'sufficient' }: VaccinePingProps) {
    const PingStatus: {
        ping: string;
        indicator: string;
    } = {
        shortage: {
            ping: "bg-red-400 dark:bg-red-500", indicator: "bg-red-600 dark:bg-red-700"
        },
        sufficient: {
            ping: "bg-green-400 opacity-75 dark:bg-green-500", indicator: "bg-green-600 dark:bg-green-700"
        },
        excess: {
            ping: "bg-purple-400 dark:bg-purple-500", indicator: "bg-purple-600 dark:bg-purple-700"
        },
        used: {
            ping: "bg-blue-400 dark:bg-blue-500", indicator: "bg-blue-600 dark:bg-blue-700"
        },
    }[status]

    return (
        <span className={cn("flex size-2.5", absolute ? "absolute top-3 right-3" : "relative", className)}>
            <span
                className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full", PingStatus.ping
                )}
            ></span>
            <span className={cn("relative inline-flex size-2.5 rounded-full", PingStatus.indicator)}></span>
        </span>
    );
}
