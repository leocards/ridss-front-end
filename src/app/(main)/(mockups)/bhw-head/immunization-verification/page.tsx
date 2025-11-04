import { Card } from "@/components/ui/card";
import { TypographyLarge } from "@/components/ui/typography";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Immunization Verification</TypographyLarge>

            <div className="mt-6">
                <Card className="shadow-xs gap-0 p-0 rounded-md overflow-hidden">
                    <div className="h-12 bg-primary text-primary-foreground">
                        <div className=""></div>
                    </div>
                </Card>
            </div>
        </div>
    )
}