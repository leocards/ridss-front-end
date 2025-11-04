import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";


type Props = {
    label: {label1: string, label2: string};
}
export default function BarChartReport({ label }: Props) {
    const chartData = [
        { label: label.label1, male: 186, female: 80, total: 366 },
        { label: label.label2, male: 305, female: 200, total: 505 },
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
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig} className="h-60 w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="label"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Bar dataKey="male" fill="var(--chart-2)" radius={4}>
                    <LabelList position="top" offset={2} className="fill-foreground" fontSize={12} />
                </Bar>
                <Bar dataKey="female" fill="var(--chart-1)" radius={4}>
                    <LabelList position="top" offset={2} className="fill-foreground" fontSize={12} />
                </Bar>
                <Bar dataKey="total" fill="var(--chart-5)" radius={4}>
                    <LabelList position="top" offset={2} className="fill-foreground" fontSize={12} />
                </Bar>
            </BarChart>
        </ChartContainer>
    );
}
