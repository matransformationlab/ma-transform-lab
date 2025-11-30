import Card from "./Card";
import { ReactNode } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { cn } from "@/lib/utils";
interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export default function StatsCard({ title, value, subtitle, icon, className }: StatsCardProps) {
  // Extract number and suffix from value like "750+" or "15+"
  const numberValue = typeof value === 'string' ? parseInt(value) : value;
  const suffix = typeof value === 'string' && value.includes('+') ? '+' : '';
  
  return (
    <Card className={cn("text-center", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-txt-secondary">{title}</p>
          <div className="text-4xl font-bold mt-2">
            <AnimatedCounter end={numberValue} suffix={suffix} />
          </div>
          {subtitle && <p className="text-xs text-txt-light mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-accent-purple">{icon}</div>}
      </div>
    </Card>
  );
}
