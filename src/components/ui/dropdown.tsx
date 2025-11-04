"use client"
import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import useElementResize from "@/hooks/element-resize";
import { Content } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { MenubarSeparator } from "./menubar";
import Link, { LinkProps } from "next/link";
import { FormControl } from "./form";

type DropdownType = {
    dropdownId?: string;

    open: boolean;
    setOpen: (open: DropdownType['open']) => void;

    width: number;
    setWidth: (width: DropdownType['width']) => void;
}

const DropdownContext = createContext<DropdownType>({
    open: false,
    setOpen: () => null,

    width: 0,
    setWidth: () => null,
})

type DropdownProvidersProps = PropsWithChildren & Pick<DropdownType, 'dropdownId'>
const DropdownProvider: React.FC<DropdownProvidersProps> = ({ children, dropdownId }) => {
    const [open, setOpen] = useState<DropdownType['open']>(false)
    const [width, setWidth] = useState<DropdownType['width']>(0)

    return (
        <DropdownContext.Provider value={{
            open, setOpen, width, setWidth, dropdownId
        }}>
            {children}
        </DropdownContext.Provider>
    )
}
const useDropdown = () => {
    const context = useContext(DropdownContext);

    if (!context) {
        throw new Error("useDropdown must be used within DropdownProvider");
    }

    return context;
};

type DropdownRootProps = PropsWithChildren
const DropdownRoot: React.FC<DropdownRootProps> = ({ children }) => {
    const { open, setOpen } = useDropdown()

    return (
        <Popover open={open} onOpenChange={setOpen}>
            {children}
        </Popover>
    )
}

type DropdownProps = PropsWithChildren & Pick<DropdownType, 'dropdownId'>
const Dropdown: React.FC<DropdownProps> = ({ children, dropdownId = 'dropdown' }) => {
    return (
        <DropdownProvider dropdownId={dropdownId}>
            <DropdownRoot children={children} />
        </DropdownProvider>
    )
}

type DropdownTriggerProps = PropsWithChildren & React.ComponentProps<'button'> & {
    withform?: boolean;
}
const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, className, withform, ...props }) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    
    const { open, setOpen, setWidth } = useDropdown()

    const {width} = useElementResize({
        el: triggerRef.current,
        defaultWidth: triggerRef.current?.offsetWidth!
    })

    useEffect(() => {
        setWidth(width)
    }, [width])

    if(withform) 
        return (
            <PopoverTrigger asChild onClick={() => setOpen(!open)}>
                <FormControl>
                    <Button ref={triggerRef} variant={'outline'} data-open={open||undefined} className={cn("hover:bg-background hover:border-zinc-300", className)} {...props}>
                        {children}
                    </Button>
                </FormControl>
            </PopoverTrigger>
        )

    return (
        <PopoverTrigger asChild onClick={() => setOpen(!open)}>
            <Button ref={triggerRef} variant={'outline'} data-open={open||undefined} className={cn("hover:bg-background hover:border-zinc-300", className)} {...props}>
                {children}
            </Button>
        </PopoverTrigger>
    )
}

type DropdownContentProps = React.ComponentProps<typeof Content> & {
    syncWidth?: boolean;
}
const DropdownContent: React.FC<DropdownContentProps> = ({
    className,
	align = "center",
	sideOffset = 4,
    syncWidth = true,
	...props
}) => {
    const { width } = useDropdown()

    return (
        <PopoverContent
            className={cn(className)}
            style={{ width: syncWidth ? width + 'px' : 'auto' }}
            align={align}
            sideOffset={sideOffset}
            hideWhenDetached
            {...props}
        />
    )
}

const DropdownSeparator = () => 
    <MenubarSeparator />

type DropdownItemProps = PropsWithChildren & {
    active?: boolean;
	variant?: "default" | "destructive";
    className?: string;
    hoverClassName?: string;
    noMotion?: boolean;
    disabled?: boolean;
}
const DropdownItem: React.FC<DropdownItemProps & React.ComponentProps<'div'>> = ({ active, variant = "default", className, disabled, hoverClassName, children, noMotion, onClick, ...props }) => {
    const { setOpen, dropdownId } = useDropdown()
	const [hover, setHover] = useState(false);

    return (
        <div
            data-variant={variant}
            className={cn(
                "font-googlesans data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-[6px] px-2 p y-1.5 h-9 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
                disabled && "opacity-50 pointer-events-none"
            )}
            onMouseMove={() => !noMotion && setHover(true)}
            onMouseLeave={() => !noMotion && setHover(false)}
            onFocus={() => !noMotion && setHover(true)}
            onBlur={() => !noMotion && setHover(false)}
            onClick={(e) => {
                setOpen(false)
                !disabled && onClick?.(e)
            }}
            {...props}
        >
            <span className={cn("z-10 flex gap-2 items-center", active && "text-primary")}>{children}</span>
            <Check className={cn("ml-auto text-primary stroke-[2.5] z-10", !active && "hidden")} />

            <AnimatePresence initial={false}>
                {hover && (
                    <motion.span
                        layoutId={dropdownId}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.17,
                        }}
                        className={cn("absolute inset-0 bg-accent rounded-[inherit] z-0", hoverClassName)}
                    ></motion.span>
                )}
            </AnimatePresence>
        </div>
    )
}

const DropdownLinkItem: React.FC<DropdownItemProps & LinkProps> = ({ active, variant = "default", className, hoverClassName, children, noMotion, ...props }) => {
    const { setOpen, dropdownId } = useDropdown()
	const [hover, setHover] = useState(false);

    return (
        <Link {...props}>
            <div
                data-variant={variant}
                className={cn(
                    "font-googlesans data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-[6px] px-2 p y-1.5 h-9 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    className
                )}
                onMouseMove={() => !noMotion && setHover(true)}
                onMouseLeave={() => !noMotion && setHover(false)}
                onFocus={() => !noMotion && setHover(true)}
                onBlur={() => !noMotion && setHover(false)}
                onClick={(e) => {
                    setOpen(false)
                }}
            >
                <span className={cn("z-10 flex gap-2 items-center", active && "text-primary")}>{children}</span>
                <Check className={cn("ml-auto text-primary stroke-[2.5] z-10", !active && "hidden")} />

                <AnimatePresence initial={false}>
                    {hover && (
                        <motion.span
                            layoutId={dropdownId}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: "tween",
                                duration: 0.17,
                            }}
                            className={cn("absolute inset-0 bg-accent rounded-[inherit] z-0", hoverClassName)}
                        ></motion.span>
                    )}
                </AnimatePresence>
            </div>
        </Link>
    )
}

export {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    DropdownLinkItem,
    DropdownSeparator
}