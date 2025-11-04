import { LoaderCircle, Search } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<'input'> & {
    containerClass?: string;
    loading?: boolean;
}

export default function SearchInput({ className, containerClass, loading, ...props }: Props) {
    

    return (
        <div className={cn("relative", containerClass)}>
            <Input
                {...props}
                className={cn("w-full h-10 pl-10", className)}
            />
            
            {!loading && (
                <Search className={cn("size-4 absolute top-1/2 -translate-y-1/2 left-3", props.disabled && 'opacity-30')} />
            )}
            {loading && (
                <LoaderCircle className={cn("size-4 absolute top-1/2 -translate-y-1/2 left-3 animate-spin", props.disabled && 'opacity-30')} />
            )}
        </div>
    )
}