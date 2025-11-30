import Link from 'next/link'
import { Mail, Phone, MapPin, Heart, Calendar, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#374151] mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#7C3AED]" />
              <span className="text-2xl font-bold text-white">MA Transform Lab</span>
            </Link>
            <p className="text-[#D1D5DB] mb-4 max-w-md">
              Transforming lives across mental, physical, business, and AI dimensions. Join thousands who have transformed their lives through our integrated system.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-[#D1D5DB]"><Mail className="w-4 h-4" /><span>matformlab@gmail.com</span></div>
              <div className="flex items-center gap-4 text-[#D1D5DB]"><Phone className="w-4 h-4" /><span>+971 50 147 2676 (WhatsApp Business)</span></div>
              <div className="flex items-center gap-4 text-[#D1D5DB]"><MapPin className="w-4 h-4" /><span>Global: East Africa | Canada | UK | Europe | Gulf</span></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5" />Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/courses/personal-transformation" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Personal Transformation</Link></li>
              <li><Link href="/courses/executive-mastery" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Executive Mastery</Link></li>
              <li><Link href="/courses/business-accelerator" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Business Accelerator</Link></li>
              <li><Link href="/courses/ai-mastery" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">AI Mastery</Link></li>
              <li><Link href="/courses/mind-body-mastery" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Mind & Body Mastery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Calendar className="w-5 h-5" />Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/assessment" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Transformation Assessment</Link></li>
              <li><Link href="/guide" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Free Transformation Guide</Link></li>
              <li><Link href="/toolkit" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Wellness Toolkit</Link></li>
              <li><Link href="/blog" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Transformation Blog</Link></li>
              <li><Link href="/tools" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">AI Tools Arsenal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#374151] mt-8 pt-8 text-center">
          <p className="text-[#9CA3AF]">© {currentYear} MA Transform Lab. Transforming lives across 5 continents. <span className="block mt-2">@matransformlab</span></p>
        </div>
      </div>
    </footer>
  )
}
