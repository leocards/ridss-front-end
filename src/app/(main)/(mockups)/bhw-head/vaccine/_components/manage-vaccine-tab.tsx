"use client"

import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ManageVaccineTab() {
    const sp = useSearchParams()
    const tab = sp.get('tab')

    const router = useRouter()

    return (
        <ArkUITabButton
            activeValue={tab!}
            onValueChange={({value}) => {
                router.push('?tab='+value)
            }}
            className="gap-2"

        >
            <ArkUITabItem value="inventory" className={cn("px-4 rounded-sm", tab === "inventory" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Inventory</span>
            </ArkUITabItem>
            <ArkUITabItem value="withdrawal" className={cn("px-4 rounded-sm", tab === "withdrawal" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Withdrawal Confirmation</span>
            </ArkUITabItem>
            <ArkUITabItem value="transaction" className={cn("px-4 rounded-sm", tab === "transaction" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Transactions</span>
            </ArkUITabItem>
        </ArkUITabButton>
    )
}