"use client"

import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
    brgy: {
    id: number;
    brgy: string;
    name: string;
    vaccines: number;
    contact: string;
}
}
export default function BarangayStockCard({ brgy }: Props) {
    const [dropdown, setDropdown] = useState(false)
    
    return (
        <div className="min-h-12">
            <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                <div className=""> <TypographySmall>{brgy.brgy}</TypographySmall> </div>
                <div className=""> <TypographySmall>{brgy.vaccines}</TypographySmall> </div>
                <div className=""> <TypographySmall>{brgy.name}</TypographySmall> </div>
                <div className=""> <TypographySmall>{brgy.contact}</TypographySmall> </div>
                <div className="flex items-center justify-center">
                    <Button size="icon" variant={'outline'} className="size-8" onClick={() => setDropdown(!dropdown)}>
                        <ChevronDown data-open={dropdown?true:undefined} className="data-open:rotate-180 transition duration-250" />
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {dropdown && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{
                            type: "keyframes",
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="shadow-inner bg-secondary/20 border-t border-border overflow-hidden"
                    >
                        <div className="p-3">
                            <div className="grid grid-cols-4 bg-secondary p-2 [&>div]:px-4 rounded-t-md border border-border border-b-0">
                                <div className=""> <TypographySmall>Vaccines</TypographySmall> </div>
                                <div className=""> <TypographySmall>Vials</TypographySmall> </div>
                                <div className=""> <TypographySmall>Total Doses</TypographySmall> </div>
                                <div className=""> <TypographySmall>Status</TypographySmall> </div>
                            </div>
                            <div className="divide-y divide-border border border-border rounded-b-md">
                                {vaccinesAvailable.map((v) => (
                                    <div key={v.id} className="grid grid-cols-4 p-2 [&>div]:px-4">
                                        <div className=""> <TypographySmall>{v.vaccine}</TypographySmall> </div>
                                        <div className=""> <TypographySmall>{v.vials}</TypographySmall> </div>
                                        <div className=""> <TypographySmall>{v.doses}</TypographySmall> </div>
                                        <div className={cn(v.status === "Available" && "text-green-500")}> <TypographySmall>{v.status}</TypographySmall> </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const vaccinesAvailable = [
    {
        id: 1,
        vaccine: 'BCG',
        vials: 10,
        doses: 10,
        status: 'Stocked'
    },
    {
        id: 2,
        vaccine: 'HEPATITS B',
        vials: 2,
        doses: 2,
        status: 'Available'
    },
    {
        id: 3,
        vaccine: 'PENTAVALENT',
        vials: 10,
        doses: 30,
        status: 'Stocked'
    },
    {
        id: 4,
        vaccine: 'IPV',
        vials: 10,
        doses: 20,
        status: 'Stocked'
    },
    {
        id: 5,
        vaccine: 'OPV',
        vials: 10,
        doses: 30,
        status: 'Stocked'
    },
]