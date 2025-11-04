import { TypographyH2, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import DashboardCard from "./_components/dashboard-card";
import UpcommingImmunization from "./_components/upcoming";
import OngoingImmunization from "./_components/ongoing-immunization";
import { Card } from "@/components/ui/card";
import OverlayScrollbar from "@/components/orverlay-scrollbar";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { TooltipComponent } from "@/components/ui/tooltip";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Dashboard</TypographyLarge>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4 mt-5">
                <Card className="shadow-xs rounded-sm h-22 p-3 gap-0">
                    <TypographySmall className="font-semibold">Upcoming Immunization</TypographySmall>
                    <TypographyH2 className="mt-3">6</TypographyH2>
                </Card>

                <Card className="shadow-xs rounded-sm h-22 p-3 gap-0">
                    <TypographySmall className="font-semibold">Present Immunization</TypographySmall>
                    <TypographyH2 className="mt-3">40</TypographyH2>
                </Card>

                <Card className="shadow-xs rounded-sm h-22 p-3 gap-0">
                    <TypographySmall className="font-semibold">Absent Immunization</TypographySmall>
                    <TypographyH2 className="mt-3">1</TypographyH2>
                </Card>

                <Card className="shadow-xs rounded-sm h-22 p-3 gap-0">
                    <TypographySmall className="font-semibold">Vials Available</TypographySmall>
                    <TypographyH2 className="mt-3">1</TypographyH2>
                </Card>

                <Card className="shadow-xs rounded-sm h-22 p-3 gap-0">
                    <TypographySmall className="font-semibold">Vials to Expire</TypographySmall>
                    <TypographyH2 className="mt-3">1</TypographyH2>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <DashboardCard className="h-120 overflow-hidden">
                    <div className="border-border flex h-13 shrink-0 items-center justify-between border-b px-3.5">
                        <TypographySmall className="text-base font-bold">Pending Registration</TypographySmall>

                        <TypographySmall className="font-normal">Total: 10</TypographySmall>
                    </div>
                    <OverlayScrollbar className="h-full">
                        <div className="divide-y divide-border">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div className="flex items-center p-2 py-3 hover:bg-secondary transition duration-200" key={index}>
                                    <div className="text-[15px] px-1 line-clamp-1">Lorem ipsum dolor est</div>

                                    <div className="flex items-center gap-2 ml-auto">
                                        <TooltipComponent title="Approve">
                                            <Button size="icon" className="size-8 cursor-pointer">
                                                <Check />
                                            </Button>
                                        </TooltipComponent>
                                        <TooltipComponent title="Disapprove">
                                            <Button size="icon" className="size-8 cursor-pointer" variant={'destructive'}>
                                                <X />
                                            </Button>
                                        </TooltipComponent>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </OverlayScrollbar>
                </DashboardCard>

                <UpcommingImmunization />

                {/* <OngoingImmunization /> */}

                {/* <DashboardCard className="h-120 overflow-hidden"></DashboardCard> */}
            </div>
        </div>
    );
}
