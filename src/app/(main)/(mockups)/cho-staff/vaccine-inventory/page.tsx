import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Plus } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Inventory</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                    <Button variant="outline">
                        <Plus />
                        <span>New Vaccine</span>
                    </Button>
                </div>

                <Card className="shadow-xs rounded-md gap-0 p-0 border-none overflow-hidden">
                    <div className="h-12 bg-primary text-primary-foreground border border-primary rounded-t-[inherit] grid grid-cols-5 items-center [&>div]:px-4">
                        <div className="col-span-2"> <TypographySmall>Vaccine Name</TypographySmall> </div>
                        <div className=""> <TypographySmall>Qty.</TypographySmall> </div>
                        <div className=""> <TypographySmall>Expiration</TypographySmall> </div>
                        <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit]">
                        <div className="h-12 border border-border border-t-0 rounded-b-[inherit] grid grid-cols-5 items-center [&>div]:px-4">
                            <div className="col-span-2"> <TypographySmall>Lorem ipsum</TypographySmall> </div>
                            <div className=""> <TypographySmall>120</TypographySmall> </div>
                            <div className=""> <TypographySmall>-</TypographySmall> </div>
                            <div className="flex justify-center">
                                <Button> <Plus/> </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}