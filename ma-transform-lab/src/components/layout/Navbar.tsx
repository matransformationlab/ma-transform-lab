import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo will go here - add your logo.jpg to public/ folder */}
            <div className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-green bg-clip-text text-transparent">
              MA TRANSFORM LAB
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/assessment" className="text-txt-secondary hover:text-accent-purple transition-colors">
              Assessment
            </Link>
            <Link href="/courses" className="text-txt-secondary hover:text-accent-purple transition-colors">
              Courses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
