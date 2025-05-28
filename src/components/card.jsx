import React from "react"
import { cn } from "../lib/utils"

// shadcn/ui Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
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
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// App-specific Card component with modern design and animations
const AppCard = ({ title, text, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 mb-8 max-w-3xl mx-auto group border border-gray-100">
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 px-6 py-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

        <div className="flex items-center space-x-3">
          {icon && (
            <span className="text-white bg-white/20 p-2 rounded-lg">
              {icon}
            </span>
          )}
          <h2 className="text-2xl font-bold text-white relative z-10 group-hover:text-amber-300 transition-colors duration-300">{title}</h2>
        </div>

        <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      <div className="p-8 bg-white">
        {Array.isArray(text) ? (
          <ul className="space-y-4">
            {text.map((item, index) => (
              <li key={index} className="flex items-start group/item">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:bg-emerald-200 group-hover/item:text-emerald-900">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-emerald-800 first-letter:mr-1 first-letter:float-left">{text}</p>
        )}
      </div>
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardContent }
export default AppCard 