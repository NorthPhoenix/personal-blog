import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-neutral-950 focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90",
        destructive: "bg-red-900 text-neutral-50 hover:bg-red-900/90",
        outline:
          "border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-50",
        secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-800 hover:text-neutral-50",
        link: "underline-offset-4 hover:underline text-neutral-50",
        none: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  unstyled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, unstyled = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          !unstyled ? buttonVariants({ variant, size, className }) : className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
