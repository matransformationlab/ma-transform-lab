import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'MA Transform Lab - Ignite Your Growth',
  description: 'Transforming lives across mental, physical, business, and AI dimensions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <div className="min-h-screen bg-bg-main text-txt-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
