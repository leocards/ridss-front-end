import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { ChevronDown, Settings2 } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Issuance</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center gap-2 mb-6">
                    <Button className="">BCG</Button>
                    <Button variant={'ghost'} className="">HEPA B</Button>
                    <Button variant={'ghost'} className="">PCV</Button>
                    <Button variant={'ghost'} className="">OPV</Button>
                </div>

                <div className="">
                    <div className="flex items-center gap-2 mb-3">
                        <Menubar className="p-0 shadow-none border-none">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <Button variant={'outline'} className="w-55 justify-start">
                                        <span className="text-muted-foreground">Batch/Lot:</span>
                                        <TypographySmall>05726703</TypographySmall>
                                        <ChevronDown className="text-muted-foreground ml-auto" />
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent className="w-55" alignOffset={0} sideOffset={1}>
                                    <MenubarItem>05726703</MenubarItem>
                                    <MenubarItem>85945456</MenubarItem>
                                    <MenubarItem>09729495</MenubarItem>
                                    <MenubarItem>19274024</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>

                        <div className="rounded-sm h-9 border border-border shadow-xs px-3 text-sm flex items-center gap-2">
                            <span className="text-muted-foreground">Exp:</span>
                            <TypographySmall>05/2026</TypographySmall>
                        </div>
                    </div>

                    <Card className="rounded-md shadow-xs gap-0 p-0 overflow-hidden border-none">
                        <div className="h-12 bg-primary border border-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-[10rem_1fr_repeat(2,minmax(5rem,_10rem))] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Date</TypographySmall> </div>
                            <div className=""> <TypographySmall>Issued to</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Qty. Issued</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Qty. Balance</TypographySmall> </div>
                        </div>
                        <div className="rounded-b-[inherit] border border-border divide-y divide-border">
                            {['San Francisico', 'Caganguhan', 'Gredu', 'New Visayas'].map((brgy, index) => (
                                <div key={index} className="min-h-11 grid grid-cols-[10rem_1fr_repeat(2,minmax(5rem,_10rem))] items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>{format(new Date, "M/dd/y")}</TypographySmall> </div>
                                    <div className=" leading-none"> 
                                        <div className=""><TypographySmall>{brgy}</TypographySmall></div>    
                                        <div className=""><TypographySmall className="font-normal text-muted-foreground">Lorem ipsum</TypographySmall></div>    
                                    </div>
                                    <div className="text-center"> <TypographySmall>{index+1}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>Qty. Balance</TypographySmall> </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}