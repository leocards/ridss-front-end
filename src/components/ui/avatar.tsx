"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { useInitials } from "@/hooks/use-initials";

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
    return (
        <AvatarPrimitive.Root
            data-slot="avatar"
            className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
            {...props}
        />
    );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
    return (
        <AvatarPrimitive.Image
            data-slot="avatar-image"
            className={cn("aspect-square size-full", className)}
            {...props}
        />
    );
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
    return (
        <AvatarPrimitive.Fallback
            data-slot="avatar-fallback"
            className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
            {...props}
        />
    );
}

const ProfilePhoto = ({ src, name, className }: { src?: string; name?: string; className?: string }) => {
    const getInitials = useInitials();

    return (
        <Avatar className={cn("overflow-hidden rounded-full font-medium", className)}>
            <AvatarImage src={src ?? "https://github.com/shadcn.png"} alt={name ?? "Lorem Ipsum"} />
            <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                {getInitials(name ?? "Lorem Ipsum")}
            </AvatarFallback>
        </Avatar>
    );
};

export { Avatar, AvatarImage, AvatarFallback, ProfilePhoto };
