import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      "p-8 rounded-2xl border border-[#374151] shadow-xl bg-[#1A1A1A] backdrop-blur-sm",
      hover && "hover:shadow-2xl transition-all duration-300", 
      className
    )}>
      {children}
      <div className="mt-6 pt-4 border-t border-[#374151] text-center">
        <p className="text-[#D1D5DB] text-sm">Share your journey: @matransformlab</p>
      </div>
    </div>
  )
}
