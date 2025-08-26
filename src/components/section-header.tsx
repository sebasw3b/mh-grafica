import * as React from "react"

// Components
import { Badge } from "@/shadcn/badge"

// Utils
import { cn } from "@/lib/utils"



function SectionHeader({
  className,
  as: Component = "header",
  ...props
}: React.ComponentProps<"header"> & {
  as?: "header" | "section" | "div"
}) {
  const Comp = Component as any
  return (
    <Comp
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

const SectionBadge = Badge

function SectionTitle({
  className,
  as: Component = "h2",
  ...props
}: React.ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}) {
  const Comp = Component as any
  return (
    <Comp
      className={cn(
        "text-5xl xl:text-6xl font-heading tracking-tighter xl:leading-tight whitespace-pre-line",
        className
      )}
      {...props}
    />
  )
}

function SectionDescription({
  className,
  as: Component = "p",
  ...props
}: React.ComponentProps<"p"> & {
  as?: "p" | "div" | "span"
}) {
  const Comp = Component as any
  return (
    <Comp
      className={cn(
        "text-secondary-foreground xl:whitespace-pre-line",
        className
      )}
      {...props}
    />
  )
}

export {
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionDescription
}