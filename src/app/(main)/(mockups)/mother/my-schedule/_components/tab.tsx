"use client";
import { ArkUITab, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
    const searchParam = useSearchParams();
    const activeTab = searchParam.get("filter")||"upcoming";

    const router = useRouter();

    return (
        <ArkUITab
            activeValue={activeTab}
            onValueChange={({ value }) => {
                router.push('?filter='+value);
            }}
            className="gap-3"
        >
            <ArkUITabItem id="ms-nav" value={"upcoming"} className={cn("h-12 px-0", activeTab == "upcoming" && "text-primary")}>
                Upcomming
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"today"} className={cn("h-12 px-0", activeTab == "today" && "text-primary")}>
                Today
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"confirmed"} className={cn("h-12 px-0", activeTab == "confirmed" && "text-primary")}>
                Confirmed
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"canceled"} className={cn("h-12 px-0", activeTab == "canceled" && "text-primary")}>
                Canceled
            </ArkUITabItem>
        </ArkUITab>
    );
}
