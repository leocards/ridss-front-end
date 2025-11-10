"use client";

import { useRouter } from "next/navigation";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";

interface Props {
    tab: 'immunization' | 'verification' | 'usage';
}
export default function CityReportTabs({ tab }: Props) {
    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={tab}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
            }}
            className="relative w-fit gap-3"
        >
            <ArkUITabItem value={"immunization"} className={cn("h-10 px-8 cursor-pointer", tab == "immunization" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Immunization</div>
            </ArkUITabItem>
            <ArkUITabItem value={"verification"} className={cn("h-10 px-8 cursor-pointer", tab == "verification" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Verification</div>
            </ArkUITabItem>
            <ArkUITabItem value={"usage"} className={cn("h-10 px-8 cursor-pointer", tab == "usage" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Vaccine Usage</div>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
