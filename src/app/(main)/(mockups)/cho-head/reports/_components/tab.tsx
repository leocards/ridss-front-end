"use client";

import { useRouter } from "next/navigation";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";

interface Props {
    tab: "vaccine Demand" | "inventory" | "vaccination" | "distribution";
}
export default function ReportsTab({ tab }: Props) {
    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={tab}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
            }}
            className="relative w-fit gap-3"
        >
            <ArkUITabItem value={"vaccine Demand"} className={cn("h-10 px-8 cursor-pointer", tab == "vaccine Demand" && "text-primary-foreground")}>
                <div className="relative z-10">Vaccine Demand</div>
            </ArkUITabItem>
            <ArkUITabItem value={"inventory"} className={cn("h-10 px-8 cursor-pointer", tab == "inventory" && "text-primary-foreground")}>
                <div className="relative z-10">Inventory</div>
            </ArkUITabItem>
            <ArkUITabItem value={"vaccination"} className={cn("h-10 px-8 cursor-pointer", tab == "vaccination" && "text-primary-foreground")}>
                <div className="relative z-10">Vaccination</div>
            </ArkUITabItem>
            <ArkUITabItem value={"distribution"} className={cn("h-10 px-8 cursor-pointer", tab == "distribution" && "text-primary-foreground")}>
                <div className="relative z-10">Distribution</div>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
