"use client";
import { TypographySmall } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * shortage = Vials is not enough and needed more vials.
 * 
 * sufficient = Vials is enough.
 * 
 * excess = Vials exceeds the number or doses needed.
 * 
 * used = Vials are used up and is enough resulting in 0 Remaining Doses.
 * **/
type DosesStatusType = 'shortage' | 'sufficient' | 'excess' | 'used'

interface Props {
    status?: DosesStatusType
}
export default function BarangayCard({ status = 'sufficient' }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <div className="relative">
                <div className={cn(
                    "absolute size-full animate-pulse",
                    (status === "sufficient" || status === "used") && "hidden",
                    status === "shortage" && "bg-red-300/30",
                    status === "excess" && "bg-purple-300/30",
                )} />

                <div className="flex items-center gap-4 px-4 py-2 relative z-10">
                    <div className="size-fit">
                        <span className="relative flex size-2.5">
                            <span className={cn(
                                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                                status == "sufficient" && "bg-green-400 dark:bg-green-500",
                                status == "shortage" && "bg-red-400 dark:bg-red-500",
                                status == "excess" && "bg-purple-400 dark:bg-purple-500",
                                status == "used" && "bg-blue-400 dark:bg-blue-500",
                            )}></span>
                            <span className={cn(
                                "relative inline-flex size-2.5 rounded-full",
                                status == "sufficient" && "bg-green-600 dark:bg-green-700",
                                status == "shortage" && "bg-red-600 dark:bg-red-700",
                                status == "excess" && "bg-purple-600 dark:bg-purple-700",
                                status == "used" && "bg-blue-600 dark:bg-blue-700",
                            )}></span>
                        </span>
                    </div>

                    <div className="line-clamp-1 text-[15px]">Barangay Lorem ipsum</div>

                    <div className="ml-auto line-clamp-1 max-w-80">
                        <TypographySmall>Vaccine/s: </TypographySmall>
                        <span className="text-[15px] italic">Lorem, Lorem, Lorem</span>
                    </div>

                    <Button variant="ghost" size={"icon"} onClick={() => setOpen(!open)} className={cn(
                        "size-7 cursor-pointer",
                        status === "shortage" && "hover:bg-red-400 hover:text-white dark:hover:bg-red-400/30",
                        status === "excess" && "hover:bg-purple-400 hover:text-white dark:hover:bg-purple-400/30",
                    )}>
                        <ChevronDown data-open={open} className="transition duration-150 data-[open=true]:rotate-180" />
                    </Button>
                </div>
            </div>

            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0}}
                            animate={{ height: 'auto', opacity: 1}}
                            exit={{ height: 0, opacity: 0}}
                            className="overflow-hidden bg-secondary/60 shadow-inner"
                        >
                            <div className="w-full p-3 border-t border-border">
                                <div className="grid grid-cols-6">
                                    <TypographySmall className="font-semibold">Vaccine</TypographySmall>
                                    <TypographySmall className="font-semibold">Vials</TypographySmall>
                                    <TypographySmall className="font-semibold">Total Dose</TypographySmall>
                                    <TypographySmall className="font-semibold">Child Vaccinated</TypographySmall>
                                    <TypographySmall className="font-semibold">Remaining Dose</TypographySmall>
                                    <TypographySmall className="font-semibold">Status</TypographySmall>
                                </div>
                                <div className={cn(
                                    "grid grid-cols-6 py-2",
                                    status === "shortage" && "text-red-500 dark:text-red-400 font-semibold",
                                    status === "excess" && "text-purple-500 dark:text-purple-400 font-semibold",
                                )}>
                                        <div className="text-[15px]">Lorem ipsum</div>
                                        <div className="text-[15px]">3</div>
                                        <div className="text-[15px]">40</div>
                                        <div className="text-[15px]">9</div>
                                        <div className="text-[15px]">31</div>
                                        <div className="text-[15px]">
                                            {status === "shortage" && "Shortage"}
                                            {status === "excess" && "Excess"}
                                            {status === "sufficient" && "Sufficient"}
                                        </div>
                                    </div>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div className="grid grid-cols-6 py-2" key={index}>
                                        <div className="text-[15px]">Lorem ipsum</div>
                                        <div className="text-[15px]">3</div>
                                        <div className="text-[15px]">40</div>
                                        <div className="text-[15px]">9</div>
                                        <div className="text-[15px]">31</div>
                                        <div className="text-[15px]">Sufficient</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
