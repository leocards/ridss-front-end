import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Printer, SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Immunization History</TypographyLarge>
            
            <div className="flex justify-end items-center gap-3 mt-3">
                <Menubar className="border-none shadow-none p-0">
                    <MenubarMenu>
                        <MenubarTrigger asChild>
                            <Button variant="outline" className="h-8">
                                <SlidersHorizontal />
                                <span>Filter</span>
                            </Button>
                        </MenubarTrigger>
                        <MenubarContent align="end" alignOffset={-15} sideOffset={1} className="rounded-sm">
                            <MenubarLabel className="text-[13px] text-muted-foreground">Vaccine Types</MenubarLabel>
                            <MenubarItem>BCG <small>(Bacillus-Calmette-Guerin)</small></MenubarItem>
                            <MenubarItem>Hepatitis B</MenubarItem>
                            <MenubarItem>Penta: DTwP-HepB-Hib</MenubarItem>
                            <MenubarItem>PCV <small>(Pneumococcal Conjugate Vaccine)</small></MenubarItem>
                            <MenubarItem>OPV</MenubarItem>
                            <MenubarItem>IPV <small>(Inactivated Polio Vaccine)</small></MenubarItem>
                            <MenubarItem>MR <small>(Measles - Rubella Vaccine)</small></MenubarItem>
                            <MenubarItem>MMR <small>(Measles - Mumps - Rubella Vaccine)</small></MenubarItem>
                            <MenubarItem>Others</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                <Button variant="outline" className="h-8">
                    <Printer />
                    <span>Print</span>
                </Button>
            </div>

            <div className="space-y-3 mt-4">
                <Card className="!p-3 cursor-pointer shadow-xs">
                    <CardContent className="space-y-2 px-1">
                        <div className="flex justify-between mt-0.5">
                            <TypographySmall className="text-muted-foreground">{format(new Date, "y/M/d")}</TypographySmall>
                            <TypographySmall className="text-green-600 font-medium">Completed</TypographySmall>
                        </div>
                        <TypographyLarge className="">BCG</TypographyLarge>
                        <div className="text-[15px]">
                            <div className="line-clamp-2">
                                Your child successfully completed this day's immunization.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}