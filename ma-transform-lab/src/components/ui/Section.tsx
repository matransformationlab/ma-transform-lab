import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
}

export default function Section({ children, className, as = 'section' }: SectionProps) {
  const Component = as as any
  return (
    <Component className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  )
}
