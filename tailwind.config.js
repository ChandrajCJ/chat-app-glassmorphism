/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0A0A0F',
          800: '#13131A',
          700: '#1C1C26',
          600: '#2A2A3A',
          500: '#3E3E56',
          400: '#6E6E91',
        },
        violet: {
          700: '#6D28D9',
          600: '#7C3AED',
          500: '#8B5CF6',
        },
        blue: {
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'shake': 'shake 0.6s cubic-bezier(.36,.07,.19,.97) both',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 18s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bob': 'bob 3s ease-in-out infinite',
        'sway': 'sway 10s ease-in-out infinite',
        'gradient-shift': 'gradientShift 20s ease-in-out infinite',
        'gradient-shift-reverse': 'gradientShiftReverse 25s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-15px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(30px) translateY(-20px) rotate(1deg)' },
          '50%': { transform: 'translateX(-20px) translateY(-40px) rotate(-1deg)' },
          '75%': { transform: 'translateX(-40px) translateY(20px) rotate(0.5deg)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(-30px) translateY(20px) rotate(-1deg)' },
          '50%': { transform: 'translateX(20px) translateY(40px) rotate(1deg)' },
          '75%': { transform: 'translateX(40px) translateY(-20px) rotate(-0.5deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(25px) rotate(1deg)' },
          '50%': { transform: 'translateX(0px) rotate(0deg)' },
          '75%': { transform: 'translateX(-25px) rotate(-1deg)' },
        },
        gradientShift: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        gradientShiftReverse: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-4px)' },
          '90%': { transform: 'translateY(-2px)' },
        },
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};