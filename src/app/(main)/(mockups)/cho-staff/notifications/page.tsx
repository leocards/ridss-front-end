import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ArrowRight, Bell, MoveRight, TrendingDown, TriangleAlert } from "lucide-react";

export default function Page() {
    return (
        <div className="max-w-2xl mx-auto">
            <TypographyLarge>Notification</TypographyLarge>

            <div className="mt-6">
                <div className="space-y-2">
                    <Card className="rounded-lg shadow-xs gap-0 p-3 cursor-pointer grid grid-cols-[1fr_auto] hover:bg-secondary">
                        <div className="">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <TriangleAlert className="size-4 text-amber-600" />
                                    <TypographySmall className="text-amber-600">Low stock</TypographySmall>
                                </div>
                                <TypographySmall>(BCG) - Bacillus-Calmette-Guerin</TypographySmall>
                            </div>
                            <TypographySmall className="text-muted-foreground/70">3 min ago</TypographySmall>
                        </div>

                        <div className="">
                            <MoveRight className="size-4" />
                        </div>
                    </Card>

                    <Card className="rounded-lg shadow-xs gap-0 p-3 cursor-pointer grid grid-cols-[1fr_auto] hover:bg-secondary">
                        <div className="">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Bell className="size-4" />
                                    <TypographySmall className="">New Vaccine Request</TypographySmall>
                                </div>
                                <TypographySmall>Barangay New Visayas </TypographySmall>
                                <span className="text-sm text-mu ted-foreground">has sent a requested for vaccines.</span>
                            </div>
                            <TypographySmall className="text-muted-foreground/70">1 week ago</TypographySmall>
                        </div>
                        <div className="">
                            <MoveRight className="size-4" />
                        </div>
                    </Card>

                    <Card className="rounded-lg shadow-xs gap-0 p-3 cursor-pointer grid grid-cols-[1fr_auto] hover:bg-secondary">
                        <div className="">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Bell className="size-4" />
                                    <TypographySmall className="">Report Submission</TypographySmall>
                                </div>
                                <TypographySmall>Barangay New Visayas </TypographySmall>
                                <span className="text-sm text-mu ted-foreground">has sent a submitted a report for vaccination result.</span>
                            </div>
                            <TypographySmall className="text-muted-foreground/70">2 weeks ago</TypographySmall>
                        </div>
                        <div className="">
                            <MoveRight className="size-4" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}