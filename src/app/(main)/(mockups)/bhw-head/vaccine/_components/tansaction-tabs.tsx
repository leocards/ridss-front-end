"use client"

import { ArkUITab, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TransactionTabs() {
    const [tab, setTabs] = useState('bcg')

    return (
        <ArkUITab activeValue={tab} onValueChange={({ value }) => setTabs(value)}>
            {tabList.map((t) => (
                <ArkUITabItem key={t.id} value={t.id} className={cn(tab === t.id ? "text-primary" : "hover:text-foreground")}>
                    {t.code}
                </ArkUITabItem>
            ))}
        </ArkUITab>
    )
}

const tabList = [
    { id: 'bcg', code: 'BCG', name: '(BCG) Bacillus-Calmette-Guerin' },
    { id: 'hbv', code: 'HBV', name: '(HBV) Hepatitis B' },
    { id: 'penta', code: 'Pentavalent', name: 'Pentavalent' },
    { id: 'pcv', code: 'PCV', name: '(PCV) Pneumococcal Conjugate Vaccine' },
    { id: 'opv', code: 'OPV', name: '(OPV) Oral Polio Vaccine' },
    { id: 'ipv', code: 'IPV', name: '(IPV) Inactivated Polio Vaccine' },
    { id: 'amv', code: 'AMV', name: '(AMV) Measles - Rubella Vaccine' },
    { id: 'mmr', code: 'MMR', name: '(MMR) Measles - Mumps - Rubella Vaccine' },
]