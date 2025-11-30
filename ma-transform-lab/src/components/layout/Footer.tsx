import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-txt-secondary">
            © 2024 MA Transform Lab. Transforming lives across 5 continents.
          </p>
          <p className="text-txt-light text-sm mt-2">@matransformlab</p>
        </div>
      </div>
    </footer>
  );
}
