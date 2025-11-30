'use client'

import Link from 'next/link'
import { Rocket, BarChart3, BookOpen, FileText, User, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Rocket className="w-6 h-6 text-[#7C3AED] group-hover:text-[#10B981] transition-colors" />
            <span className="text-xl font-bold text-white group-hover:text-[#D1D5DB] transition-colors">MA Transform Lab</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="flex items-center gap-2 text-[#D1D5DB] hover:text-[#7C3AED] transition-colors"><BookOpen className="w-4 h-4" />Courses</Link>
            <Link href="/blog" className="flex items-center gap-2 text-[#D1D5DB] hover:text-[#7C3AED] transition-colors"><FileText className="w-4 h-4" />Blog</Link>
            <Link href="/assessment" className="flex items-center gap-2 text-[#D1D5DB] hover:text-[#7C3AED] transition-colors"><BarChart3 className="w-4 h-4" />Assessment</Link>
            <Link href="/dashboard" className="flex items-center gap-2 text-[#D1D5DB] hover:text-[#7C3AED] transition-colors"><User className="w-4 h-4" />Dashboard</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/assessment">
              <Button size="sm">Start Assessment</Button>
            </Link>
            <button className="md:hidden text-[#D1D5DB]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#374151]">
            <div className="flex flex-col gap-4">
              <Link href="/courses" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Courses</Link>
              <Link href="/blog" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Blog</Link>
              <Link href="/assessment" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Assessment</Link>
              <Link href="/dashboard" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Dashboard</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
