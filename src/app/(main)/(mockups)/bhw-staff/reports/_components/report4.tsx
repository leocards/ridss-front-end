"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BarChartReport from "./bar-chart-report";

type Props = {
    label?: string;
    footerLabel?: string;
}
export default function Report4({ label, footerLabel }: Props) {
    return (
        <Card className="flex flex-col col-span-2 rounded-md shadow-xs gap-0">
            <CardHeader className="pb-0 flex-row">
                <CardTitle className="line-clamp-2 leading-5">{label}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 items-center pb-0 overflow-hidden">
                <BarChartReport 
                    label={{
                        label1: '0-11 months old',
                        label2: '0-11 months old given iron suppl\'n'
                    }}
                />
                <BarChartReport 
                    label={{
                        label1: '12-59 months old',
                        label2: '12-59 months old given iron suppl\'n'
                    }}
                />
            </CardContent>
        </Card>
    )
}