"use client";

import { CalendarDays, TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TypographySmall } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", male: 1260, female: 570 }];

const chartConfig = {
    male: {
        label: "Male",
        color: "var(--chart-1)",
    },
    female: {
        label: "Female",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

type Props = {
    label?: string;
    footerLabel?: string;
}
export function Report2({ label, footerLabel }: Props) {
    const totalVisitors = chartData[0].male + chartData[0].female;

    return (
        <Card className="flex flex-col rounded-md shadow-xs gap-0">
            <CardHeader className="pb-0 flex-row">
                <div className="h-14">
                    <CardTitle className="line-clamp-2 leading-5">{label}</CardTitle>
                    <CardDescription>October 2025</CardDescription>
                </div>

            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0 overflow-hidden">
                <ChartContainer config={chartConfig} className="mx-auto w-full min-w-60 aspect-square -mb-30 -mt-10">
                    <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130} barGap={100}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 16}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="male"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--chart-1)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="female"
                            fill="var(--chart-2)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col justify-center gap-3 text-[10px] h-14">
                <div className="flex justify-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <div className="size-[9px] rounded-xs -[3px]" style={{ backgroundColor: 'var(--chart-1)' }}></div>
                        <TypographySmall className="font-normal">Male</TypographySmall>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-[9px] rounded-xs -[3px]" style={{ backgroundColor: 'var(--chart-2)' }}></div>
                        <TypographySmall className="font-normal">Female</TypographySmall>
                    </div>
                </div>
                {footerLabel && (<div className="text-center text-[12px] italic">
                    {footerLabel}
                </div>)}
            </CardFooter>
        </Card>
    );
}
