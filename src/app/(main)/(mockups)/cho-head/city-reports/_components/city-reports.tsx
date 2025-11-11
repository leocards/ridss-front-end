import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographySmall } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { eachMonthOfInterval, format } from "date-fns";
import { Calendar, Download } from "lucide-react";
import { Fragment } from "react";

export default function CityReports() {
    const months = eachMonthOfInterval({
        start: new Date(2025, 0, 1),
        end: new Date(2025, 11, 31),
    }).map(date => format(date, "MMMM"));

    const startYear = 2015;
    const currentYear = new Date().getFullYear();

    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, i) => startYear + i
    );
    
    return (
        <div className="mt-7 space-y-3">
            <div className="flex items-center gap-3">
                <Menubar className="p-0 shadow-none border-none w-fit">
                    <MenubarMenu>
                        <MenubarTrigger asChild>
                            <Button variant={'outline'} className="w-35 justify-start">
                                <Calendar />
                                <span>November</span>
                            </Button>
                        </MenubarTrigger>
                        <MenubarContent alignOffset={0} sideOffset={1} className="min-w-35">
                            {months.map((m, index) => (
                                <MenubarItem key={index} className={cn(format(new Date(), "MMMM") == m && "text-primary font-medium")}>{m}</MenubarItem>
                            ))}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

                <Menubar className="p-0 shadow-none border-none w-fit">
                    <MenubarMenu>
                        <MenubarTrigger asChild>
                            <Button variant={'outline'} className="w-30 justify-start">
                                <Calendar />
                                <span>2025</span>
                            </Button>
                        </MenubarTrigger>
                        <MenubarContent alignOffset={0} sideOffset={1} className="min-w-30">
                            {years.reverse().map((m, index) => (
                                <MenubarItem key={index}>{m}</MenubarItem>
                            ))}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

                <div className="flex items-center gap-3 ml-auto">
                    <Button variant="outline">
                        <Download />
                        PDF Export
                    </Button>
                    <Button variant="outline">
                        <Download />
                        Excel Export
                    </Button>
                </div>
            </div>

            <Card className="p-0 gap-0 rounded-md border-none shadow-xs overflow-hidden">
                <div className="overflow-x-auto rounded-[inherit]">
                    <div className="h-12 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center border border-primary bg-primary text-primary-foreground rounded-t-[inherit]">
                        <div className="text-center"><TypographySmall className="px-4 break-words">Activities</TypographySmall></div>
                        <div className="text-center"><TypographySmall className="px-4 break-words">New Visayas</TypographySmall></div>
                        <div className="text-center"><TypographySmall className="px-4 break-words">New Malitbog</TypographySmall></div>
                        <div className="text-center"><TypographySmall className="px-4 break-words">Gredu</TypographySmall></div>
                        <div className="text-center"><TypographySmall className="px-4 break-words">Caganguhan</TypographySmall></div>
                        <div className="text-center h-full flex items-center justify-center"><TypographySmall className="px-4 break-words">Total</TypographySmall></div>
                    </div>
                    <div className="divide-y divide-border border border-t-0 border-border rounded-b-[inherit]">
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">1. Immunization status of infants (0-11 months old)</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['BCG','PENTAVALENT 1','PENTAVALENT 2','PENTAVALENT 3'].map((vacc, index) => (
                            <Fragment key={index}>
                                <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                                    <div className="pl-10"><TypographySmall className="break-words">{vacc}</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                </div>
                                <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                    <div className="pl-14"><TypographySmall className="break-words">Male</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                </div>
                                <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                    <div className="pl-14"><TypographySmall className="break-words">Female</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                    <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                </div>
                            </Fragment>
                        ))}
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">2.  No. of Fully Immunized Child (FIC)</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">3.  No. of Completely Immunized Children  (CIC) 12 - 23 months</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">4.  No. of  Livebirths, born in the current year registered in the EPI-TCL this month</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="pl-10 "><TypographySmall className="break-words">No. of infants (0 -11 mos old)  protected at birth (PAB) from neonatal tetanus</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-14"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">5.  No. of infants with Birth Certificate</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}
                        
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">6.  No. of infants referred for newborn screening</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">7.  No. of Infants underwent for newborn screening within 25 hours to 72 hours</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="pl-10 "><TypographySmall className="break-words">Government</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-14"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}
                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="pl-10 "><TypographySmall className="break-words">Private</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-14"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">8. No. of infants exclusively breastfeed up to 6th months</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">9. No. of infants 6-8 months of age who started/received complementary feeding</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">10.  No. of infants (2-6 months old) with low-birth weight (LBW) less than 2,500 g</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                            <div className="px-4 "><TypographySmall className="break-words">11.  No. of infants with low-birth weight (2,500 g) given iron supplementation for four (4) months</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                            <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                        </div>
                        {['Male','Female'].map((sex, index) => (
                            <div key={index} className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                <div className="pl-10"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                        ))}

                        <Fragment>
                            <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                                <div className="px-4 "><TypographySmall className="break-words">12. Anemic children seen</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">100</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">100</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">100</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">100</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">400</TypographySmall></div>
                            </div>
                            <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                                <div className="pl-10 "><TypographySmall className="break-words">0 - 11 months old</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                            {['Male','Female'].map((sex, index) => (
                                <Fragment key={index}>
                                    <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                        <div className="pl-14"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                    </div>
                                    <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                        <div className="pl-18"><TypographySmall className="break-words">No. given iron suppl'n </TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                    </div>
                                </Fragment>
                            ))}
                            <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center bg-secondary hoverShadow hover:relative hover:z-10">
                                <div className="pl-10 "><TypographySmall className="break-words">12 - 59 months old</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                            </div>
                            {['Male','Female'].map((sex, index) => (
                                <Fragment key={index}>
                                    <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                        <div className="pl-14"><TypographySmall className="break-words">{sex}</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                    </div>
                                    <div className="min-h-9 grid grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hoverShadow hover:relative hover:z-10">
                                        <div className="pl-18"><TypographySmall className="break-words">No. given iron suppl'n </TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4"><TypographySmall className="break-words">50</TypographySmall></div>
                                        <div className="text-center px-4 bg-secondary h-full flex items-center justify-center"><TypographySmall className="break-words">250</TypographySmall></div>
                                    </div>
                                </Fragment>
                            ))}
                        </Fragment>
                    </div>
                </div>
            </Card>
        </div>
    )
}