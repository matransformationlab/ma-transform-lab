import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      "glass p-8 rounded-2xl border border-white/20",
      hover && "hover:shadow-2xl hover:border-white/40 transition-all duration-300",
      className
    )}>
      {children}
    </div>
  );
}
