import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
}

export default function ProgressBar({ value, max = 100, className, showLabel = false }: ProgressBarProps) {
  const percentage = Math.min(Math.max(value, 0), max)
  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-[#D1D5DB]">Progress • @matransformlab</span>
        {showLabel && <span className="text-sm text-[#D1D5DB] font-bold">{percentage}%</span>}
      </div>
      <div className="w-full bg-[#374151] rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#7C3AED] to-[#10B981] transition-all duration-500" 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    </div>
  )
}
