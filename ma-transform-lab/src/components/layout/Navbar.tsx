import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-txt-primary">MA Transform Lab</span>
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
