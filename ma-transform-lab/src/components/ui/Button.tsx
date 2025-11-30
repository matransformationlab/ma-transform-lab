import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export default function Button({ 
  children, 
  loading, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] focus:ring-[#7C3AED]",
    secondary: "bg-[#10B981] text-white hover:bg-[#059669] focus:ring-[#10B981]",
    outline: "border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white focus:ring-[#7C3AED]",
    ghost: "text-[#D1D5DB] hover:bg-[#1A1A1A] hover:text-white"
  }
  
  const sizes = { 
    sm: "px-3 py-1.5 text-sm", 
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg" 
  }
  
  return (
    <button 
      className={cn(base, variants[variant], sizes[size], className)} 
      disabled={loading || props.disabled} 
      {...props}
    >
      {loading && <span className="mr-2 animate-spin">⟳</span>}
      {children}
      <span className="ml-2 text-xs font-normal opacity-75">@matransformlab</span>
    </button>
  )
}
