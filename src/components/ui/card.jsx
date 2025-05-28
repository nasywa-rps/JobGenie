import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, variant = "default", hover = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground transition-all duration-300",
      {
        "shadow-sm hover:shadow-md": variant === "default" && hover,
        "shadow-md hover:shadow-lg": variant === "elevated" && hover,
        "shadow-lg hover:shadow-xl": variant === "prominent" && hover,
        "border-2 border-emerald-100": variant === "outline",
        "bg-gradient-to-br from-emerald-50 to-white": variant === "gradient",
        "bg-white/80 backdrop-blur-md border-white/20": variant === "glass",
        "transform hover:-translate-y-1": hover,
      },
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-gray-900",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500 mt-2", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 border-t border-gray-100 mt-4", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

const CardImage = React.forwardRef(({ src, alt, className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full overflow-hidden rounded-t-xl", className)} {...props}>
    <img
      src={src}
      alt={alt || "Card image"}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
))
CardImage.displayName = "CardImage"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }
