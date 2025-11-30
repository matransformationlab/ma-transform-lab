import { Users, TrendingUp } from 'lucide-react'

export default function SocialBanner() {
  return (
    <div className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      <div className="relative z-10 flex items-center justify-center gap-2">
        <Users className="w-4 h-4" />
        <span className="text-sm font-medium">Join 1,000+ students @matransformlab</span>
        <TrendingUp className="w-4 h-4" />
      </div>
    </div>
  )
}
