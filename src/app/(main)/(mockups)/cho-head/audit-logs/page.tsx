import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Audit Logs</TypographyLarge>

            <div className="mt-6">
                <Card className="gap-0 rounded-md p-0 shadow-xs overflow-hidden border-none">
                    <div className="h-12 bg-primary text-primary-foreground grid grid-cols-[13rem_1fr_10rem_1fr] items-center border border-primary rounded-t-[inherit] [&>div]:px-4">
                        <div className=""> <TypographySmall>Date</TypographySmall> </div>
                        <div className=""> <TypographySmall>User</TypographySmall> </div>
                        <div className=""> <TypographySmall>Action</TypographySmall> </div>
                        <div className=""> <TypographySmall>Details</TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-border border-t-0 divide-y divide-border">
                        <div className="min-h-11 grid grid-cols-[13rem_1fr_10rem_1fr] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{format(new Date, "MM/d/y hh:mm:ss a")}</TypographySmall> </div>
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className=""> <TypographySmall>Approved Request</TypographySmall> </div>
                            <div className="line-clamp-1"> <TypographySmall>You approved vaccine request of barangay New Visayas</TypographySmall> </div>
                        </div>
                        <div className="min-h-11 grid grid-cols-[13rem_1fr_10rem_1fr] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{format(new Date, "MM/d/y hh:mm:ss a")}</TypographySmall> </div>
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className="leading-4"> <TypographySmall>Added Vaccine Stock</TypographySmall> </div>
                            <div className="line-clamp-1"> <TypographySmall>You added stock for BCG, IPV, OPV, HEPA B vaccines.</TypographySmall> </div>
                        </div>
                        <div className="min-h-11 grid grid-cols-[13rem_1fr_10rem_1fr] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{format(new Date, "MM/d/y hh:mm:ss a")}</TypographySmall> </div>
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className="leading-4"> <TypographySmall>Updated Vaccine Details</TypographySmall> </div>
                            <div className="line-clamp-1"> <TypographySmall>You updated the dosage of BCG vaccine.</TypographySmall> </div>
                        </div>
                        <div className="min-h-11 grid grid-cols-[13rem_1fr_10rem_1fr] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{format(new Date, "MM/d/y hh:mm:ss a")}</TypographySmall> </div>
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className=""> <TypographySmall>Approved Request</TypographySmall> </div>
                            <div className="line-clamp-1"> <TypographySmall>You approved vaccine request of barangay New Malitbog</TypographySmall> </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}