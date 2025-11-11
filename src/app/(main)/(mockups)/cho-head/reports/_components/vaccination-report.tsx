"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { PenLine, Trash2, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import CityReports from "../../city-reports/_components/city-reports";

export default function VaccineDemand() {

    return (
        <div className="mt-6">
            <div className="">
                <Card className="gap-0 rounded-lg p-0 shadow-xs border-none">
                    <div className="bg-primary border-primary rounded-t-[inherit] text-primary-foreground grid h-12 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center border-b">
                        <TypographySmall className="px-4 text-center">Barangay</TypographySmall>
                        <TypographySmall className="px-4 text-center">Vaccine Type</TypographySmall>
                        <TypographySmall className="px-4 text-center">Target Population</TypographySmall>
                        <TypographySmall className="px-4 text-center">Vaccinated</TypographySmall>
                        <TypographySmall className="px-4 text-center">Coverage Rate(%)</TypographySmall>
                        <TypographySmall className="px-4 text-center">Missed Cases</TypographySmall>
                        <TypographySmall className="px-4 text-center">Remarks</TypographySmall>
                    </div>

                    <div className="divide-border max-h-120 divide-y border border-border border-t-0 rounded-b-[inherit]">
                        {vaccination.map((vacc, index) => (
                            <div
                                key={index}
                                className="hover:bg-secondary grid h-11 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center transition duration-200"
                            >
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.barangay}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.vaccine}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.target_pop}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.vaccinated}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.coverage_rate}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.missed_cases}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.remarks}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="flex items-center px-4">
                    <div className="">
                        <TypographySmall className="text-muted-foreground">1 of 50</TypographySmall>
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
            
            <CityReports />
        </div>
    );
}


const vaccination = [
    {
        id: 1,
        vaccine: 'BCG',
        barangay: 'New Visayas',
        target_pop: '500',
        vaccinated: '470',
        coverage_rate: '94%',
        missed_cases: '30',
        remarks: 'On-track'
    },
    {
        id: 1,
        vaccine: 'HEPATITIS B',
        barangay: 'New Malitbog',
        target_pop: '550',
        vaccinated: '480',
        coverage_rate: '87%',
        missed_cases: '70',
        remarks: 'Schedule follow-up'
    },
    {
        id: 1,
        vaccine: 'IPV',
        barangay: 'Nanyo',
        target_pop: '450',
        vaccinated: '400',
        coverage_rate: '89%',
        missed_cases: '50',
        remarks: 'Reschedule campaign'
    },
    {
        id: 1,
        vaccine: 'OPV',
        barangay: 'JP Laurel',
        target_pop: '120',
        vaccinated: '105',
        coverage_rate: '97%',
        missed_cases: '15',
        remarks: 'Sufficient stock'
    },
]