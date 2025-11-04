"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
    { month: "0 - 11 months old", month2: "test", male: 50, female: 50, total: 100, male2: 30, female2: 30, total2: 60 },
    { month: "12 - 59 months old", male: 50, female: 50, total: 100, male2: 30, female2: 30, total2: 60 },
];

const chartConfig = {
    male: {
        label: "Male",
        color: "var(--chart-1)",
    },
    female: {
        label: "Female",
        color: "var(--chart-2)",
    },
    total: {
        label: "Total",
        color: "var(--chart-5)",
    },
    male2: {
        label: "Male2",
        color: "var(--chart-sub-1)",
    },
    female2: {
        label: "Female2",
        color: "var(--chart-sub-2)",
    },
    total2: {
        label: "Total2",
        color: "var(--chart-sub-5)",
    },
} satisfies ChartConfig;

export function ChartBarStacked() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <XAxis
                            dataKey="month2"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />

                        <Bar dataKey="male" stackId="a" fill="var(--chart-1)" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="female" stackId="b" fill="var(--chart-2)" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="total" stackId="c" fill="var(--chart-5)" radius={[0, 0, 4, 4]} />

                        <Bar dataKey="male2" stackId="a" fill="var(--chart-sub-1)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="female2" stackId="b" fill="var(--chart-sub-2)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="total2" stackId="c" fill="var(--chart-sub-5)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
            </CardFooter>
        </Card>
    );
}
