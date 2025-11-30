import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Card from "./Card"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  className?: string
}

export default function StatsCard({ title, value, subtitle, icon, className }: StatsCardProps) {
  return (
    <Card className={cn("text-center", className)} hover={true}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#D1D5DB]">{title}</p>
          <p className="text-4xl font-bold text-white mt-2">{value}</p>
          {subtitle && <p className="text-xs text-[#9CA3AF] mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-[#7C3AED]">{icon}</div>}
      </div>
    </Card>
  )
}
