import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export default function Button({ 
  children, 
  loading, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:ring-2 disabled:opacity-50";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-purple to-accent-green text-white hover:from-accent-purple-hover hover:to-accent-green-hover focus:ring-accent-purple shadow-lg",
    secondary: "bg-gradient-to-r from-accent-orange to-yellow-400 text-white hover:from-accent-orange-hover hover:to-yellow-500 focus:ring-accent-orange shadow-lg",
    outline: "border-2 border-gradient-to-r from-accent-purple to-accent-green text-accent-purple hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-green hover:text-white",
    ghost: "text-txt-secondary hover:bg-white/50 hover:text-txt-primary"
  };
  
  const sizes = { 
    sm: "px-3 py-1.5 text-sm", 
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg" 
  };
  
  return (
    <button 
      className={cn(base, variants[variant], sizes[size], className)} 
      disabled={loading || props.disabled} 
      {...props}
    >
      {loading && <span className="mr-2 animate-spin">⟳</span>}
      {children}
    </button>
  );
}
