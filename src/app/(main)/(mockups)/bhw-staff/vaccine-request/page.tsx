import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographyLarge, TypographySmall, TypographyH3 } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, Ellipsis, PenLine, Plus, Trash2 } from "lucide-react";
import NewRequest from "./_components/new-request";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Vaccine Requests</TypographyLarge>

            <div className="mt-5 mb-8">
                <div className="mb-3">Available Stock</div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-4">
                    <TooltipComponent title="BCG (Bacillus-Calmette-Guerin)">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">BCG <span className="text-xs font-medium">(Bacillus-Calmette-Guerin)</span></TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="Hepatitis B">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">Hepatitis B</TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="Penta: DTwP-HepB-Hib">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">Penta: DTwP-HepB-Hib</TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="PCV (Pneumococcal Conjugate Vaccine)">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">PCV <span className="text-xs font-medium">(Pneumococcal Conjugate Vaccine)</span></TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="OPV">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">OPV</TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="IPV">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">IPV</TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="MR (Measles - Rubella Vaccine)">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">MR <span className="text-xs font-medium">(Measles - Rubella Vaccine)</span></TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="MMR (Measles - Mumps - Rubella Vaccine)">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">MMR <span className="text-xs font-medium">(Measles - Mumps - Rubella Vaccine)</span></TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                    <TooltipComponent title="Other vaccines">
                        <Card className="shadow-xs rounded-sm h-18 p-3 gap-0">
                            <div className="">
                                <TypographySmall className="font-semibold text-muted-foreground line-clamp-1">Other vaccines</TypographySmall>
                            </div>
                            <div className="mt-1">
                                <TypographyH3 className="">5</TypographyH3>
                            </div>
                        </Card>
                    </TooltipComponent>
                </div>
            </div>

            <div className="space-y-4">
                <NewRequest />

                <div className="">
                    <Card className="rounded-lg shadow-xs gap-0 p-0">
                        <div className="h-12 grid grid-cols-[repeat(5,_1fr)_10rem] items-center w-full border-b border-border">
                            <TypographySmall className="px-4">Vaccine Name</TypographySmall>
                            <TypographySmall className="px-4">Qty. Issued</TypographySmall>
                            <TypographySmall className="px-4">Status</TypographySmall>
                            <TypographySmall className="px-4">Date Issued</TypographySmall>
                            <TypographySmall className="px-4">Date Approved</TypographySmall>
                            <TypographySmall className="px-4 text-center">Action</TypographySmall>
                        </div>
                        
                        <div className="min-h-100 divide-y divide-border">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-11 grid grid-cols-[repeat(5,_1fr)_10rem] items-center w-full hover:bg-secondary transition duration-200">
                                    <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                                    <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                                    <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                                    <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                                    <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                                    <div className="flex justify-center gap-3">
                                        <Button size="icon" variant="outline" className="size-7"><PenLine /></Button>
                                        <Button size="icon" variant="outline" className="size-7"><Trash2 /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="flex items-center px-4">
                        <div className="">
                            <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2 mt-4 ml-auto">
                            <Button size="icon" variant={'outline'}>
                                <ChevronLeft />
                            </Button>
                            <Button size="icon" variant={'default'}>1</Button>
                            <Button size="icon" variant={'outline'}>2</Button>
                            <Button size="icon" variant={'outline'}><Ellipsis /></Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}