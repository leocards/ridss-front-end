import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, PenLine, Trash2 } from "lucide-react";
import NewRequest from "./new-request";

export default function VaccineRequest() {
    return (
        <div className="space-y-3 mt-5">
            <div className="flex">
                <NewRequest />
            </div>

            <div className="">
                <Card className="gap-0 rounded-lg p-0 shadow-xs border-none">
                    <div className="bg-primary border-primary rounded-t-[inherit] text-primary-foreground grid h-12 w-full grid-cols-[repeat(5,_1fr)_10rem] items-center border-b">
                        <TypographySmall className="px-4">Vaccine Name</TypographySmall>
                        <TypographySmall className="px-4">Qty. Issued</TypographySmall>
                        <TypographySmall className="px-4">Status</TypographySmall>
                        <TypographySmall className="px-4">Date Issued</TypographySmall>
                        <TypographySmall className="px-4">Date Approved</TypographySmall>
                        <TypographySmall className="px-4 text-center">Action</TypographySmall>
                    </div>

                    <div className="divide-border max-h-120 divide-y border border-border border-t-0 rounded-b-[inherit]">
                        {vaccinesRequested.map((vacc, index) => (
                            <div
                                key={index}
                                className="hover:bg-secondary grid h-11 w-full grid-cols-[repeat(5,_1fr)_10rem] items-center transition duration-200"
                            >
                                <div className="line-clamp-1 px-4 text-[15px]">{vacc.vaccine}</div>
                                <div className="line-clamp-1 px-4 text-[15px]">{vacc.issued}</div>
                                <div className="line-clamp-1 px-4 text-[15px]">{vacc.status}</div>
                                <div className="line-clamp-1 px-4 text-[15px]">{vacc.issued_date}</div>
                                <div className="line-clamp-1 px-4 text-[15px]">{vacc.approved_date}</div>
                                <div className="flex justify-center gap-3">
                                    <Button size="icon" variant="outline" className="size-7">
                                        <PenLine />
                                    </Button>
                                    <Button size="icon" variant="outline" className="size-7">
                                        <Trash2 />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="flex items-center px-4">
                    <div className="">
                        <TypographySmall className="text-muted-foreground">2 of 50</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2 mt-4 ml-auto">
                        <Button className="" variant={'outline'}>
                            Page 1 of 5
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronsLeft />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronLeft />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronRight />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronsRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const vaccinesRequested = [
    {
        id: 1,
        vaccine: 'BCG',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'HEPATITIS B',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'IPV',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'OPV',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
]