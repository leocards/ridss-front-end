"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TypographySmall } from "@/components/ui/typography";

export const description = "A multiple bar chart";

const chartData = [
    { sector: 'Government', male: 186, female: 80, total: 366 },
    { sector: 'Private', male: 305, female: 200, total: 505 }
];

const chartConfig = {
    female: {
        label: "Government",
        color: "var(--chart-1)",
    },
    male: {
        label: "Private",
        color: "var(--chart-2)",
    },
    total: {
        label: "Total",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig;

type Props = {
    label?: string;
    footerLabel?: string;
}
export default function Report3({ label, footerLabel }: Props) {
    return (
        <Card className="rounded-md shadow-xs">
            <CardHeader className="flex items-center">
                <div className="h-14">
                    <CardTitle className="line-clamp-2 leading-5">{label}</CardTitle>
                    <CardDescription>October 2025</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="">
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="sector"
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
            <CardFooter className="flex justify-center items-center gap-2 text-xs">
                <div className="flex justify-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-[3px]" style={{ backgroundColor: 'var(--chart-1)' }}></div>
                        <TypographySmall>Male</TypographySmall>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-[3px]" style={{ backgroundColor: 'var(--chart-2)' }}></div>
                        <TypographySmall>Female</TypographySmall>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-[3px]" style={{ backgroundColor: 'var(--chart-5)' }}></div>
                        <TypographySmall>Total</TypographySmall>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
