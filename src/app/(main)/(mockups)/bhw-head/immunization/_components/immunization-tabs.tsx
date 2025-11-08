"use client"

import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    active: 'verification' | 'report'
}
export default function ImmunizationTabs({ active }: Props) {
    const [tab, setTab] = useState(active||'verification')
    const router = useRouter()
    
    return (
        <ArkUITabButton activeValue={tab} onValueChange={({ value }) => {
            setTab(value as typeof active)
            router.push('?tab='+value)
        }} className="gap-2">
            <ArkUITabItem value="verification" className={cn(tab === 'verification' ? "text-primary-foreground" : "hover:text-foreground" )}>
                <span className="relative z-10">Verification</span>
            </ArkUITabItem>
            <ArkUITabItem value="report" className={cn(tab === 'report' ? "text-primary-foreground" : "hover:text-foreground" )}>
                <span className="relative z-10">Report</span>
            </ArkUITabItem>
        </ArkUITabButton>
    )
}