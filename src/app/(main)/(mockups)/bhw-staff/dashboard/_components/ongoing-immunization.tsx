import OverlayScrollbar from "@/components/orverlay-scrollbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Info } from "lucide-react";
import DashboardCard from "./dashboard-card";
import { TypographySmall } from "@/components/ui/typography";
import { TooltipComponent } from "@/components/ui/tooltip";
import BarangayCard from "./barangay-card";

export default function OngoingImmunization() {
    return (
        <DashboardCard className="min-h-70 max-h-180 overflow-hidden col-span-2">
            <div className="border-border flex h-13 shrink-0 items-center justify-between border-b px-3.5">
                <TypographySmall className="text-base font-bold flex items-center gap-2">
                    Ongoing Barangay Immunization

                    <TooltipComponent title="Info">
                        <Button size={'icon'} className="size-6 cursor-pointer opacity-50 hover:opacity-100" variant={'ghost'}>
                            <Info className="" />
                        </Button>
                    </TooltipComponent>
                </TypographySmall>

                <TypographySmall className="font-normal">20 Barangays</TypographySmall>
            </div>
            <OverlayScrollbar className="h-full">
                <div className="divide-y">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <BarangayCard key={index} />
                    ))}

                    <BarangayCard status="excess" />
                    <BarangayCard status="shortage" />

                    {Array.from({ length: 5 }).map((_, index) => (
                        <BarangayCard key={index} />
                    ))}
                </div>
            </OverlayScrollbar>
        </DashboardCard>
    );
}
