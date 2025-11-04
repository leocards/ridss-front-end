import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Validation</TypographyLarge>

            <div className="mt-6">
                <Card className="shadow-xs rounded-md gap-0 p-0 border-none">
                    <div className="h-12 bg-primary text-primary-foreground border border-primary rounded-t-[inherit] grid grid-cols-5 items-center [&>div]:px-4">
                        <div className="col-span-2"> <TypographySmall>Barangay</TypographySmall> </div>
                        <div className=""> <TypographySmall>Barangay</TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit]">
                        <div className="h-12 border border-border rounded-b-[inherit] grid grid-cols-5">

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}