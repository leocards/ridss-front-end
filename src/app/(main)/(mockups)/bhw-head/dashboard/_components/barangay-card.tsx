import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { TypographySmall } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

interface Props {
    status: "shortage" | "sufficient" | "excess" | "used";
}
export default function BarangayCard({ status }: Props) {
    return (
        <Card className={cn(
            "hover:bg-secondary relative cursor-pointer transition-colors shadow-none rounded-md gap-0 p-0 overflow-hidden h-29",
            status === "shortage" && "hover:!bg-red-300/20 !border-red-200",
            status === "excess" && "hover:!bg-purple-300/20 !border-purple-200",
        )}>
            <div className={cn(
                    "absolute size-full animate-pulse",
                    (status === "sufficient" || status === "used") && "hidden",
                    status === "shortage" && "bg-red-300/30",
                    status === "excess" && "bg-purple-300/30",
                )} />

            <span className="absolute top-2 right-2 flex size-2.5">
                <span
                    className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                        status == "sufficient" && "bg-green-400 dark:bg-green-500",
                        status == "shortage" && "bg-red-400 dark:bg-red-500",
                        status == "excess" && "bg-purple-400 dark:bg-purple-500",
                        status == "used" && "bg-blue-400 dark:bg-blue-500",
                    )}
                ></span>
                <span
                    className={cn(
                        "relative inline-flex size-2.5 rounded-full",
                        status == "sufficient" && "bg-green-600 dark:bg-green-700",
                        status == "shortage" && "bg-red-600 dark:bg-red-700",
                        status == "excess" && "bg-purple-600 dark:bg-purple-700",
                        status == "used" && "bg-blue-600 dark:bg-blue-700",
                    )}
                ></span>
            </span>

            <div className="p-2">
                <TypographySmall className="line-clamp-1 leading-4">Brgy. Lorem Ipsum</TypographySmall>

                <div className="flex gap-2">
                    <Progress className="mt-1 h-1.5 w-[60%]" value={75} />
                    <TypographySmall className="text-muted-foreground !text-xs">75%</TypographySmall>
                </div>

                <div className="mt-0.5">
                    <TypographySmall className="text-muted-foreground/80 !text-xs leading-3">Vaccine Stock</TypographySmall>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="flex justify-between gap-2 hover:underline">
                            <TypographySmall className="text-muted-foreground text-[13px]">Lorem ipsum</TypographySmall>
                            <TypographySmall className="text-muted-foreground text-[13px]">2|15</TypographySmall>
                        </div>
                    ))}
                    <div className="leading-0">...</div>
                </div>
            </div>
        </Card>
    );
}
