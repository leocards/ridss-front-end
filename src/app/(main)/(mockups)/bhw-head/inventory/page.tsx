import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Check, Loader, Trash2 } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Inventory</TypographyLarge>

            <div className="mt-6">

                    <Card className="gap-0 overflow-hidden rounded-md p-0 shadow-xs">
                        <div className="bg-primary text-primary-foreground grid h-12 grid-cols-5 items-center px-3 [&>div]:not-first:text-center">
                            <div className="col-span-2">
                                <TypographySmall>Vaccine</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>Qty</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>Opened</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>Expiration</TypographySmall>
                            </div>
                        </div>
                        <div className="divide-y">
                            {['Bacillus-Calmette-Guerin', 'Hepatitis B', 'Pneumococcal Conjugate Vaccine'].map((vac, index) => (
                                <div key={index} className="grid h-11 grid-cols-5 items-center px-3 [&>div]:not-first:text-center">
                                    <div className="col-span-2">
                                        <TypographySmall>{vac}</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall>3</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall className="line-clamp-1">1</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall className="">
                                            28 days left
                                        </TypographySmall>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
            </div>
        </div>
    )
}