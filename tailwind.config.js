/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f7ff',
          100: '#e0efff',
          200: '#b9daff',
          300: '#7cbeff',
          400: '#369eff',
          500: '#0a7fff',
          600: '#0062f5',
          700: '#004de0',
          800: '#0040b5',
          900: '#00388e',
          950: '#001f5c',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        surface: {
          950: '#020409',
          900: '#060c18',
          800: '#0a1628',
          700: '#0f2040',
          600: '#162d58',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(10, 127, 255, 0.3), transparent)',
        'card-glow': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(10, 127, 255, 0.15), transparent)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'progress': 'progress 2s ease-in-out forwards',
        'zoom-in': 'zoomIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(10, 127, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(10, 127, 255, 0.7)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brand': '0 0 30px rgba(10, 127, 255, 0.4)',
        'brand-lg': '0 0 60px rgba(10, 127, 255, 0.3)',
        'card': '0 1px 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover': '0 8px 32px rgba(10, 127, 255, 0.2), 0 0 0 1px rgba(10, 127, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
