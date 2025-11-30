import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: { 600: '#7C3AED', 700: '#6D28D9' },
        emerald: { 500: '#10B981', 600: '#059669' },
        gray: { 800: '#1A1A1A', 900: '#0F0F0F', 700: '#374151', 400: '#9CA3AF', 300: '#D1D5DB' },
        yellow: { 500: '#F59E0B' }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
