import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface DashboardCardProps extends PropsWithChildren {
    className?: string;
}
export default function DashboardCard({ children, className }: DashboardCardProps) {
    return (
        <Card className={cn("shadow-xs rounded-sm p-0 gap-0", className)}>
            {children}
        </Card>
    )
}