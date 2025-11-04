import { cn } from "@/lib/utils"
import React, { PropsWithChildren } from "react"

type Props = { className?: string }

export function TypographyH1({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'h1'>) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)} {...props} >
      {children}
    </h1>
  )
}
export function TypographyH2({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} >
      {children}
    </h2>
  )
}
export function TypographyH3({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} >
      {children}
    </h3>
  )
}
export function TypographyH4({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'h4'>) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} >
      {children}
    </h4>
  )
}
export function TypographyP({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'p'>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} >
      {children}
    </p>
  )
}
export function TypographyBlockquote({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'blockquote'>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} >
      {children}
    </blockquote>
  )
}
export function TypographyList({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'ul'>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} >
      {children}
    </ul>
  )
}
export function TypographyInlineCode({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'code'>) {
  return (
    <code className={cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props} >
      {children}
    </code>
  )
}
export function TypographyLead({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'p'>) {
  return (
    <p {...props} className={cn("text-muted-foreground text-xl", className)}>
      {children}
    </p>
  )
}
export function TypographyLarge({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'div'>) {
  return <div className={cn("text-lg font-semibold", className)} {...props}>{children}</div>
}
export function TypographySmall({ children, className, ...props}: PropsWithChildren & React.ComponentProps<'small'>) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)} {...props}>{children}</small>
  )
}
export function TypographyMuted({ children, className, ...props }: PropsWithChildren & React.ComponentProps<'p'>) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props} >{children}</p>
  )
}
