"use client";
import { ArkUITab, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
    const searchParam = useSearchParams();
    const activeTab = searchParam.get("registration")||"parent";

    const router = useRouter();

    return (
        <ArkUITab
            activeValue={activeTab}
            onValueChange={({ value }) => {
                router.push('?registration='+value);
            }}
            className="gap-3"
        >
            <ArkUITabItem id="mother-nav" value={"parent"} className={cn("h-12 px-0", activeTab == "parent" && "text-primary")}>
                Parent Registration
            </ArkUITabItem>
            <ArkUITabItem id="mother-nav" value={"child"} className={cn("h-12 px-0", activeTab == "child" && "text-primary")}>
                Child Registration
            </ArkUITabItem>
        </ArkUITab>
    );
}
