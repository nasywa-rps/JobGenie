import * as React from "react"
import { cn } from "../../lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-emerald-100 text-emerald-800": variant === "default",
          "bg-emerald-600 text-white": variant === "primary",
          "bg-amber-100 text-amber-800": variant === "secondary",
          "bg-red-100 text-red-800": variant === "destructive",
          "bg-gray-100 text-gray-800": variant === "outline",
          "bg-white/20 text-white backdrop-blur-sm border border-white/10": variant === "glass",
          "bg-gradient-to-r from-emerald-500 to-emerald-700 text-white": variant === "gradient",
          "px-2.5 py-0.5 text-xs": size === "default",
          "px-2 py-0.5 text-[0.625rem]": size === "sm",
          "px-3 py-1 text-sm": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge } 