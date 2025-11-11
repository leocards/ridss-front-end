"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { PenLine, Trash2,ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function InventoryReport() {
    return (
        <div className="mt-6">
             
             
          
                <div className="">
                <Card className="gap-0 rounded-lg p-0 shadow-xs border-none">
                    <div className="bg-primary border-primary rounded-t-[inherit] text-primary-foreground grid h-12 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center border-b">
                        <TypographySmall className="px-4 text-center">Vaccine Type</TypographySmall>
                        <TypographySmall className="px-4 text-center">Batch No.</TypographySmall>
                        <TypographySmall className="px-4 text-center">Expiration Date</TypographySmall>
                        <TypographySmall className="px-4 text-center">Current Stock</TypographySmall>
                        <TypographySmall className="px-4 text-center">Unit</TypographySmall>
                        <TypographySmall className="px-4 text-center">Location</TypographySmall>
                        <TypographySmall className="px-4 text-center">Status</TypographySmall>
                    </div>

                    <div className="divide-border max-h-120 divide-y border border-border border-t-0 rounded-b-[inherit]">
                        {inventoryReport.map((inv, index) => (
                            <div
                                key={index}
                                className="hover:bg-secondary grid h-11 w-full grid-cols-[repeat(6,_1fr)_10rem] items-center transition duration-200"
                            >
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.vaccine}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.batch_no}</div>
                                <div className="line-clamp-2 px-4 text-center text-[15px]">{inv.expiration_date}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.current_stock}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.unit}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.location}</div>
                                <div className="line-clamp-1 px-4 text-center text-[15px]">{inv.status}</div>
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


const inventoryReport = [
    {
        id: 1,
        vaccine: 'BCG',
        batch_no: 'BCG-2025-011',
        expiration_date: 'December 12 2025',
        current_stock: '480',
        unit: 'vials',
        location: 'New Visayas',
        status: 'Good'
    },
    {
        id: 1,
        vaccine: 'HEPATITIS B',
         batch_no: 'BCG-2025-011',
        expiration_date: 'December 12 2025',
        current_stock: '480',
        unit: 'vials',
        location: 'New Visayas',
        status: 'Good'
    },
    {
        id: 1,
        vaccine: 'IPV',
        batch_no: 'BCG-2025-011',
        expiration_date: 'December 12 2025',
        current_stock: '480',
        unit: 'vials',
        location: 'New Visayas',
        status: 'Good'
    },
    {
        id: 1,
        vaccine: 'OPV',
         batch_no: 'BCG-2025-011',
        expiration_date: 'December 12 2025',
        current_stock: '480',
        unit: 'vials',
        location: 'New Visayas',
        status: 'Good'
    },
]