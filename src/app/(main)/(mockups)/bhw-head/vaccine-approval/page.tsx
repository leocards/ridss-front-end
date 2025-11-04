import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { ArrowUpDown, Check, Loader, Settings2, Trash2 } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Vaccine Approval</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4 flex items-center gap-3">
                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <ArrowUpDown />
                                    <span>Sort</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <MenubarLabel className="text-muted-foreground/70">Filter by Vaccine</MenubarLabel>
                                <MenubarItem>All Vaccine</MenubarItem>
                                <MenubarItem>Bacillus-Calmette-Guerin</MenubarItem>
                                <MenubarItem>Hepatitis B</MenubarItem>
                                <MenubarItem>DTwP-HepB-Hib</MenubarItem>
                                <MenubarItem>Pneumococcal Conjugate Vaccine</MenubarItem>
                                <MenubarItem>OPV</MenubarItem>
                                <MenubarItem>Inactivated Polio Vaccine</MenubarItem>
                                <MenubarItem>Measles - Rubella Vaccine</MenubarItem>
                                <MenubarItem>Measles - Mumps - Rubella Vaccine</MenubarItem>
                                <MenubarItem>Other vaccines</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <Settings2 />
                                    <span>Pending</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <MenubarLabel className="text-muted-foreground/70">Filter by Status</MenubarLabel>
                                <MenubarItem>All</MenubarItem>
                                <MenubarItem>Approved</MenubarItem>
                                <MenubarItem>Disapproved</MenubarItem>
                                <MenubarItem>Pending</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <Settings2 />
                                    <span>All Vaccine</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <MenubarLabel className="text-muted-foreground/70">Filter by Vaccine</MenubarLabel>
                                <MenubarItem>All Vaccine</MenubarItem>
                                <MenubarItem>Bacillus-Calmette-Guerin</MenubarItem>
                                <MenubarItem>Hepatitis B</MenubarItem>
                                <MenubarItem>DTwP-HepB-Hib</MenubarItem>
                                <MenubarItem>Pneumococcal Conjugate Vaccine</MenubarItem>
                                <MenubarItem>OPV</MenubarItem>
                                <MenubarItem>Inactivated Polio Vaccine</MenubarItem>
                                <MenubarItem>Measles - Rubella Vaccine</MenubarItem>
                                <MenubarItem>Measles - Mumps - Rubella Vaccine</MenubarItem>
                                <MenubarItem>Other vaccines</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <Card className="gap-0 overflow-hidden rounded-md p-0 shadow-xs">
                    <div className="bg-primary text-primary-foreground grid h-12 grid-cols-5 items-center px-3">
                        <div className="">
                            <TypographySmall>Vaccine</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Qty</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Issued By</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Status</TypographySmall>
                        </div>
                        {/* <div className="">
                            <TypographySmall>Date</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Remarks</TypographySmall>
                        </div> */}
                        <div className="text-center">
                            <TypographySmall>Action</TypographySmall>
                        </div>
                    </div>
                    <div className="grid h-11 grid-cols-5 items-center px-3">
                        <div className="">
                            <TypographySmall>BCG</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>3</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall className="line-clamp-1">John Doe</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall className="flex items-center gap-1">
                                <Loader className="size-3.5" />
                                Pending
                            </TypographySmall>
                        </div>
                        {/* <div className="">
                            <TypographySmall>
                                {format(new Date, "MMMM dd, y")}
                            </TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>
                                -
                            </TypographySmall>
                        </div> */}
                        <div className="flex items-center justify-center gap-3">
                            <TooltipComponent title="Approve">
                                <Button size="icon" className="size-8 bg-green-600 text-green-50">
                                    <Check />
                                </Button>
                            </TooltipComponent>
                            <TooltipComponent title="Disapprove">
                                <Button size="icon" className="size-8" variant={"destructive"}>
                                    <Trash2 />
                                </Button>
                            </TooltipComponent>
                        </div>
                    </div>
                </Card>

                <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                    <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
                </div>
            </div>
        </div>
    );
}
