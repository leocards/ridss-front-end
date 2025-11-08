import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import DataConfirmationButton from "../../barangay-data/_components/data-confirmation-button";

export default function Reports() {
    return (
        <div className="mt-6">
            <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                <div className="border-primary bg-primary text-primary-foreground grid h-12 grid-cols-[1fr_repeat(3,_10rem)] items-center rounded-t-[inherit] border [&>small]:px-4 [&>small]:not-first:text-center">
                    <TypographySmall>Activity</TypographySmall>
                    <TypographySmall>Male</TypographySmall>
                    <TypographySmall>Female</TypographySmall>
                    <TypographySmall>Total</TypographySmall>
                </div>
                <div className="divide-border border-border divide-y rounded-b-[inherit] border border-t-0">
                    <div className="grid h-10 grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall>1. Immunization status of infants (0-11 months old):</TypographySmall>
                        <TypographySmall>100</TypographySmall>
                        <TypographySmall>100</TypographySmall>
                        <TypographySmall>200</TypographySmall>
                    </div>
                    <div className="grid h-10 grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall className="!pl-8">1.1 B C G</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>50</TypographySmall>
                    </div>
                    <div className="grid h-10 grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall className="!pl-8">1.2 PENTAVALENT 1</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>50</TypographySmall>
                    </div>
                    <div className="grid h-10 grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall className="!pl-8">1.3 PENTAVALENT 2</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>50</TypographySmall>
                    </div>
                    <div className="grid h-10 grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall className="!pl-8">1.3 PENTAVALENT 3</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>25</TypographySmall>
                        <TypographySmall>50</TypographySmall>
                    </div>
                </div>
            </Card>

            <DataConfirmationButton />
        </div>
    );
}
