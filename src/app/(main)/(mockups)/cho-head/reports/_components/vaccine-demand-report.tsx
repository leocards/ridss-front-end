"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { PenLine, Trash2, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function VaccineDemand() {
    return (
        <div className="mt-6">
            <div className="flex mb-2">
                <Button className="ml-auto">
                    <Plus />
                    Generate Forecast
                </Button>
            </div>


            <div className="">
                <Card className="gap-0 rounded-lg p-0 shadow-xs border-none">
                    <div className="bg-primary border-primary rounded-t-[inherit] text-primary-foreground grid h-12 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center border-b">
                        <TypographySmall className="px-4 text-center">Vaccine Type</TypographySmall>
                        <TypographySmall className="px-4 text-center">Barangay</TypographySmall>
                        <TypographySmall className="px-4 text-center">Forecast Month</TypographySmall>
                        <TypographySmall className="px-4 text-center">Forecasted Demand(Doses)</TypographySmall>
                        <TypographySmall className="px-4 text-center">Current Stock</TypographySmall>
                        <TypographySmall className="px-4 text-center">Additional Needed</TypographySmall>
                        <TypographySmall className="px-4 text-center">Remarks</TypographySmall>
                    </div>

                    <div className="divide-border max-h-120 divide-y border border-border border-t-0 rounded-b-[inherit]">
                        {vaccinedemand.map((vacc, index) => (
                            <div
                                key={index}
                                className="hover:bg-secondary grid h-11 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center transition duration-200"
                            >
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.vaccine}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.barangay}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.forecast_month}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.forecast_demand}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.current_stock}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{vacc.additional_needed}</div>
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

        </div>
    );
}


const vaccinedemand = [
    {
        id: 1,
        vaccine: 'BCG',
        barangay: 'New Visayas',
        forecast_month: 'December 2025',
        forecast_demand: '480',
        current_stock: '300',
        additional_needed: '180',
        remarks: 'Sufficient stock'
    },
    {
        id: 1,
        vaccine: 'HEPATITIS B',
        barangay: 'New Malitbog',
        forecast_month: 'December 2025',
        forecast_demand: '480',
        current_stock: '300',
        additional_needed: '180',
        remarks: 'Sufficient stock'
    },
    {
        id: 1,
        vaccine: 'IPV',
        barangay: 'Nanyo',
        forecast_month: 'December 2025',
        forecast_demand: '480',
        current_stock: '300',
        additional_needed: '180',
        remarks: 'Sufficient stock'
    },
    {
        id: 1,
        vaccine: 'OPV',
        barangay: 'JP Laurel',
        forecast_month: 'December 2025',
        forecast_demand: '480',
        current_stock: '300',
        additional_needed: '180',
        remarks: 'Sufficient stock'
    },
]