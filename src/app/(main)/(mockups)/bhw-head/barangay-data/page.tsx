import { Card } from "@/components/ui/card";
import DataConfirmationButton from "./_components/data-confirmation-button";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Barangay Data</TypographyLarge>

            <div className="mt-6">
                <Card className="shadow-xs rounded-md gap-0 p-0 overflow-hidden border-none">
                    <div className="h-12 grid grid-cols-[1fr_repeat(3,_10rem)] items-center border border-primary rounded-t-[inherit] bg-primary text-primary-foreground [&>small]:px-4 [&>small]:not-first:text-center">
                        <TypographySmall>Activity</TypographySmall>
                        <TypographySmall>Male</TypographySmall>
                        <TypographySmall>Female</TypographySmall>
                        <TypographySmall>Total</TypographySmall>
                    </div>
                    <div className="divide-y divide-border border border-border border-t-0 rounded-b-[inherit]">
                        <div className="h-10 grid grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                            <TypographySmall>1.  Immunization status of infants (0-11 months old):</TypographySmall>
                            <TypographySmall>100</TypographySmall>
                            <TypographySmall>100</TypographySmall>
                            <TypographySmall>200</TypographySmall>
                        </div>
                        <div className="h-10 grid grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                            <TypographySmall className="!pl-8">1.1 B C G</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>50</TypographySmall>
                        </div>
                        <div className="h-10 grid grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                            <TypographySmall className="!pl-8">1.2 PENTAVALENT 1</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>50</TypographySmall>
                        </div>
                        <div className="h-10 grid grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                            <TypographySmall className="!pl-8">1.3 PENTAVALENT 2</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>50</TypographySmall>
                        </div>
                        <div className="h-10 grid grid-cols-[1fr_repeat(3,_10rem)] items-center [&>small]:px-4 [&>small]:not-first:text-center">
                            <TypographySmall className="!pl-8">1.3 PENTAVALENT 3</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>25</TypographySmall>
                            <TypographySmall>50</TypographySmall>
                        </div>
                    </div>
                </Card>

                <DataConfirmationButton />
            </div>
        </div>
    )
}