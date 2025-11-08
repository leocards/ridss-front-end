import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { Eye } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Logs</TypographyLarge>

            <div className="mt-6">
                <Card className="rounded-md shadow-xs gap-0 p-0 border-none overflow-hidden">
                    <div className="h-12 bg-primary border border-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-[13rem_repeat(3,_1fr)_5rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>Date</TypographySmall> </div>
                        <div className=""> <TypographySmall>User</TypographySmall> </div>
                        <div className=""> <TypographySmall>Action Taken</TypographySmall> </div>
                        <div className=""> <TypographySmall>Details</TypographySmall> </div>
                        <div className=""></div>
                    </div>
                    <div className="rounded-b-[inherit] border border-border divide-y divide-border">
                        {Logs.map((log) => (
                            <div key={log.id} className="h-12 grid grid-cols-[13rem_repeat(3,_1fr)_5rem] items-center [&>div]:px-4">
                                <div className="leading-4"> <TypographySmall>{format(log.date, "MMM d, y hh:mm a")}</TypographySmall> </div>
                                <div className=""> <TypographySmall>{log.user}</TypographySmall> </div>
                                <div className=""> <TypographySmall>{log.action}</TypographySmall> </div>
                                <div className=""> <TypographySmall className="line-clamp-1">{log.details}</TypographySmall> </div>
                                <div className="flex items-center gap-3">
                                    <Button size="icon" className="size-7" variant="outline">
                                        <Eye />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                    <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
                </div>
            </div>
        </div>
    )
}

export const Logs = [
    {
        id: 6,
        date: new Date(),
        user: 'You',
        action: 'Approve Request',
        details: 'Approved vaccine request for BCG and is approval for CHO.'
    },
    {
        id: 1,
        date: new Date(),
        user: 'John Doe',
        action: 'Vaccine Request',
        details: 'Submitted approval for BCG vaccine request.'
    },
    {
        id: 2,
        date: new Date(),
        user: 'Mark Vin',
        action: 'Vaccine Request',
        details: ' Submitted an approval for Hepatitis B vaccine request.'
    },
    {
        id: 3,
        date: new Date(),
        user: 'Joanna Sy',
        action: 'Vaccine Request',
        details: ' Submitted an approval for IPV vaccine request.'
    },
    {
        id: 4,
        date: new Date(),
        user: 'Lorry Jane Tubby',
        action: 'Vaccine Request',
        details: ' Submitted an approval for OPV vaccine request.'
    },
    {
        id: 5,
        date: new Date(),
        user: 'Aspire Race',
        action: 'Vaccine Request',
        details: ' Submitted an approval for Pentavalent 1 vaccine request.'
    },
]