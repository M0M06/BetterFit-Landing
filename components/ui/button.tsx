import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-transparent text-[0.88rem] font-semibold tracking-tight whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-[3px] focus-visible:ring-ring/35 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary — the product's cobalt blue
        default:
          "bg-bf-blue text-white shadow-[0_6px_16px_-6px_rgba(23,105,255,0.5)] hover:bg-bf-blue-700 hover:-translate-y-px",
        // Neutral outline on light surfaces
        outline:
          "border-bf-border bg-white text-bf-ink shadow-[0_1px_2px_rgba(12,20,36,0.05)] hover:border-bf-blue/40 hover:text-bf-blue",
        // Ink — dark button, used sparingly (e.g. GitHub)
        ink: "bg-bf-ink text-white hover:bg-[#1a2438] hover:-translate-y-px",
        ghost: "text-bf-ink-700 hover:bg-bf-blue-100/60 hover:text-bf-ink",
        link: "text-bf-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-[0.8rem]",
        lg: "h-12 px-6 text-[0.92rem]",
        xl: "h-13 px-7 text-[0.95rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
