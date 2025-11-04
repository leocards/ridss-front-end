"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TypographySmall } from "@/components/ui/typography";

export const description = "A multiple bar chart";

const chartData = [
    { month: 'V1', vaccine: "BCG", male: 186, female: 80, total: 366 },
    { month: 'V2.1', vaccine: "PENTAVALENT 1", male: 305, female: 200, total: 505 },
    { month: 'V2.2', vaccine: "PENTAVALENT 2", male: 237, female: 120, total: 357 },
    { month: 'V2.3', vaccine: "PENTAVALENT 3", male: 73, female: 190, total: 263 },
    { month: 'V3.1', vaccine: "POLIO 1", male: 209, female: 130, total: 339 },
    { month: 'V3.2', vaccine: "POLIO 2", male: 214, female: 140, total: 354 },
    { month: 'V3.3', vaccine: "POLIO 3", male: 214, female: 140, total: 354 },
    { month: 'V4', vaccine: "IPV", male: 214, female: 140, total: 354 },
    { month: 'V5.1.1', vaccine: "HEPA B (<= 24hr) Government", male: 214, female: 140, total: 354 },
    { month: 'V5.1.2', vaccine: "HEPA B (<= 24hr) Private", male: 214, female: 140, total: 354 },
    { month: 'V5.2.1', vaccine: "HEPA B (> 24hr) Government", male: 214, female: 140, total: 354 },
    { month: 'V5.2.2', vaccine: "HEPA B (> 24hr) Private", male: 214, female: 140, total: 354 },
    { month: 'V6', vaccine: "MEASLES (MCV 1)", male: 214, female: 140, total: 354 },
    { month: 'V7.1', vaccine: "MEASLES-MUMPS-RUBELLA (MCV 2) - 12 to 15 months", male: 214, female: 140, total: 354 },
    { month: 'V8.1', vaccine: "ROTAVIRUS 1", male: 214, female: 140, total: 354 },
    { month: 'V8.2', vaccine: "ROTAVIRUS 2", male: 214, female: 140, total: 354 },
    { month: 'V9.1', vaccine: "PCV 1", male: 214, female: 140, total: 354 },
    { month: 'V9.2', vaccine: "PCV 2", male: 214, female: 140, total: 354 },
    { month: 'V9.3', vaccine: "PCV 3", male: 214, female: 140, total: 354 },
];

const chartConfig = {
    female: {
        label: "Female",
        color: "var(--chart-1)",
    },
    male: {
        label: "Male",
        color: "var(--chart-2)",
    },
    total: {
        label: "Total",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig;

export default function Report1() {
    return (
        <Card className="rounded-md shadow-xs">
            <CardHeader className="flex items-center">
                <div className="">
                    <CardTitle>1.) Immunization status of infants (0-11 months old)</CardTitle>
                    <CardDescription>October 2025</CardDescription>
                </div>

                <div className="ml-auto flex items-center gap-1">
                    <TypographySmall>Total: </TypographySmall>
                    <div className="text-muted-foreground">505</div>
                </div>
            </CardHeader>
            <CardContent className="">
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Bar dataKey="male" fill="var(--chart-2)" radius={4}>
                            <LabelList
                                position="top"
                                offset={2}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar dataKey="female" fill="var(--chart-1)" radius={4}>
                            <LabelList
                                position="top"
                                offset={2}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar dataKey="total" fill="var(--chart-5)" radius={4}>
                            <LabelList
                                position="top"
                                offset={2}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center gap-2 text-xs [&_i]:text-muted-foreground [&>div]:after:content-[')'] [&>div]:before:content-['(']">
                <div className="space-y-1.5">
                    <TypographySmall className="foont-semibold">V1</TypographySmall> - 
                    <i>BCG</i>
                </div>
                <div className="space-y-1.5">
                    <TypographySmall className="foont-semibold">V2.1</TypographySmall> - 
                    <i>PENTAVALENT 1</i>
                </div>
                <div className="space-y-1.5">
                    <TypographySmall className="foont-semibold">V2.2</TypographySmall> - 
                    <i>PENTAVALENT 2</i>
                </div>
                <div className="space-y-1.5">
                    <TypographySmall className="foont-semibold">V2.3</TypographySmall> - 
                    <i>PENTAVALENT 3</i>
                </div>
            </CardFooter>
        </Card>
    );
}
