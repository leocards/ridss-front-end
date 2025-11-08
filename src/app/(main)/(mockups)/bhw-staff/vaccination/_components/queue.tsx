import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyH1, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Check, ChevronLeft, ChevronRight, PillBottle } from "lucide-react";

export default function VaccinationQueue() {
    return (
        <div className="mt-6">
            <Card className="grid grid-cols-3 gap-3 rounded-md p-3 shadow-xs">
                <Card className="gap-0 rounded-md p-3 shadow-xs">
                    <TypographySmall className="text-center font-semibold uppercase">Skipped Queue</TypographySmall>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                        <div className="border-border rounded-sm border p-2 text-center shadow-xs">
                            <span className="text-muted-foreground">QN:</span> <span className="font-medium">10</span>
                        </div>
                        <div className="border-border rounded-sm border p-2 text-center shadow-xs">
                            <span className="text-muted-foreground">QN:</span> <span className="font-medium">16</span>
                        </div>
                    </div>
                </Card>
                <div className="grid grid-rows-[auto_1fr]">
                    <div className="mb-3 grid grid-cols-2 gap-3">
                        <Button className="h-10 uppercase">
                            <ChevronLeft />
                            Prev
                        </Button>
                        <Button className="h-10 uppercase">
                            Next
                            <ChevronRight />
                        </Button>
                    </div>
                    <Card className="gap-3 rounded-md border-none p-0 shadow-none !grid grid-rows-[1fr_auto]">
                        <Card className="w-full gap-0 rounded-md p-3 shadow-xs grow">
                            <div className="text-primary text-center">
                                <TypographySmall className="font-semibold uppercase">Current Serving</TypographySmall>
                            </div>
                            <div className="my-auto text-center">
                                <TypographyH1 className="text-destructive text-8xl">20</TypographyH1>
                            </div>
                        </Card>
                        {/* <Button variant="outline" className="uppercase">Skip Queue</Button> */}
                        <div className="grid grid-cols-2 gap-3">
                            <Card className="gap-0 rounded-md p-3 text-center shadow-xs">
                                <TypographySmall className="font-semibold uppercase">Total Served</TypographySmall>
                                <TypographyLarge>19</TypographyLarge>
                            </Card>
                            <Card className="gap-0 rounded-md p-3 text-center shadow-xs">
                                <TypographySmall className="font-semibold uppercase">Queuing</TypographySmall>
                                <TypographyLarge>130</TypographyLarge>
                            </Card>
                        </div>
                    </Card>
                </div>

                <Card className="gap-0 rounded-md p-3 shadow-xs">
                    <TypographySmall className="text-center font-semibold uppercase">Next Serving</TypographySmall>
                    <div className="border-border my-3 rounded-sm border p-2 text-center shadow-xs">
                        <span className="text-muted-foreground">QN:</span> <span className="font-medium">21</span>
                    </div>
                    <TypographySmall className="text-center font-semibold uppercase">Waiting</TypographySmall>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="border-border rounded-sm border p-2 text-center shadow-xs">
                                <span className="text-muted-foreground">QN:</span>{" "}
                                <span className="font-medium">{index + 22}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </Card>

            <div className="mt-5">
                <Card className="grid grid-cols-2 rounded-md p-3 shadow-xs">
                    <div className="flex items-center gap-2">
                        <TypographySmall className="text-muted-foreground text-base font-normal">Name:</TypographySmall>
                        <TypographySmall className="text-base font-semibold">John Doe</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2">
                        <TypographySmall className="text-muted-foreground text-base font-normal">Sex:</TypographySmall>
                        <TypographySmall className="text-base font-semibold">Male</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2">
                        <TypographySmall className="text-muted-foreground text-base font-normal">
                            Birth Height:
                        </TypographySmall>
                        <TypographySmall className="text-base font-semibold">50 CM</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2">
                        <TypographySmall className="text-muted-foreground text-base font-normal">
                            Birth Weight:
                        </TypographySmall>
                        <TypographySmall className="text-base font-semibold">2.5 KG</TypographySmall>
                    </div>
                </Card>
            </div>

            <div className="mt-5">
                <div className="mb-4">
                    <TypographyLarge>Vaccines</TypographyLarge>
                </div>

                <div className="space-y-2">
                    <Card className="flex-row items-center gap-3 rounded-md p-3 shadow-xs">
                        <div className="text-primary bg-primary/10 flex size-10 items-center justify-center rounded-sm">
                            <PillBottle className="size-5" />
                        </div>
                        <div className="">
                            <TypographySmall className="text-base">BCG</TypographySmall>
                        </div>
                        <Button className="ml-auto">Received</Button>
                    </Card>
                    <Card className="flex-row items-center gap-3 rounded-md p-3 shadow-xs">
                        <div className="text-primary bg-primary/10 flex size-10 items-center justify-center rounded-sm">
                            <PillBottle className="size-5" />
                        </div>
                        <div className="">
                            <TypographySmall className="text-base">HEPATITIS B</TypographySmall>
                        </div>
                        <Button className="ml-auto">Received</Button>
                    </Card>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end">
                <Button className="h-11 !px-8 bg-green-600 hover:bg-green-600/90">
                    <Check />
                    Complete
                </Button>
            </div>
        </div>
    );
}
