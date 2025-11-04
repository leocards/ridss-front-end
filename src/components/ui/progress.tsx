"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Progress({ className, value, baseColor = "bg-primary/20", progressColor = "bg-primary", ...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & {
    baseColor?: string;
    progressColor?: string;
}) {
    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn("relative h-2 w-full overflow-hidden rounded-full", className, baseColor)}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={cn("h-full w-full flex-1 transition-all rounded-full", progressColor)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
