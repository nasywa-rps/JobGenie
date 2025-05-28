import * as React from "react"
import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, variant = "default", icon, ...props }, ref) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border border-gray-300 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100": variant === "default",
            "border-2 border-emerald-500 bg-emerald-50 focus:bg-white": variant === "primary",
            "bg-gray-100 border-0 focus:bg-gray-50 focus:ring-2 focus:ring-gray-200": variant === "filled",
            "bg-transparent border-b border-gray-300 rounded-none hover:border-emerald-500 focus:border-emerald-500": variant === "underlined",
            "pl-10": !!icon,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
Input.displayName = "Input"

export { Input } 