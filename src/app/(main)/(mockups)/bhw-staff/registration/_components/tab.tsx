"use client";
import { ArkUITab, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
    const searchParam = useSearchParams();
    const activeTab = searchParam.get("tab")||"all";

    const router = useRouter();

    return (
        <ArkUITab
            activeValue={activeTab}
            onValueChange={({ value }) => {
                router.push('?tab='+value);
            }}
            className="gap-3 w-fit"
        >
            <ArkUITabItem id="ms-nav" value={"all"} className={cn("h-10 pb-3 cursor-pointer", activeTab == "all" && "text-primary")}>
                All
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"pending"} className={cn("h-10 pb-3 cursor-pointer", activeTab == "pending" && "text-primary")}>
                Pending
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"disapproved"} className={cn("h-10 pb-3 cursor-pointer", activeTab == "disapproved" && "text-primary")}>
                Disapproved
            </ArkUITabItem>
        </ArkUITab>
    );
}
