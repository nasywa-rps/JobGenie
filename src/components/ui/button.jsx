import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? React.Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5": variant === "default",
          "bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5": variant === "primary",
          "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5": variant === "destructive",
          "border-2 border-emerald-600 bg-transparent text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700": variant === "outline",
          "bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm hover:shadow": variant === "secondary",
          "bg-transparent underline-offset-4 hover:underline text-emerald-600 hover:text-emerald-700": variant === "link",
          "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20": variant === "ghost",
          "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5": variant === "gradient",
          "h-10 px-5 py-2 rounded-lg": size === "default",
          "h-9 rounded-md px-3 text-xs": size === "sm",
          "h-12 rounded-xl px-8 text-base": size === "lg",
          "h-9 w-9 rounded-full p-0": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button } 