"use client"

import { LoaderCircle, Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

type Props = React.ComponentProps<'input'> & {
    containerClass?: string;
    loading?: boolean;
}

export default function SearchInput({ className, containerClass, loading, ...props }: Props) {
    const [value, setValue] = useState(props.value)

    return (
        <div className={cn("relative", containerClass)}>
            <Input
                {...props}
                value={value}
                onInput={(e) => {
                    props.onInput?.(e)
                    setValue(e.currentTarget.value)
                }}
                className={cn("w-full h-10 pl-10 pr-10", className)}
            />
            
            {!loading && (
                <Search className={cn("size-4 absolute top-1/2 -translate-y-1/2 left-3", props.disabled && 'opacity-30')} />
            )}
            {loading && (
                <LoaderCircle className={cn("size-4 absolute top-1/2 -translate-y-1/2 left-3 animate-spin", props.disabled && 'opacity-30')} />
            )}

            <Button data-show={!value?true:undefined} onClick={() => setValue("")} size="icon" variant={'ghost'} className="absolute top-1/2 -translate-y-1/2 right-1.5 size-7 cursor-pointer data-show:scale-0 scale-100 transition duration-250">
                <X />
            </Button>
        </div>
    )
}