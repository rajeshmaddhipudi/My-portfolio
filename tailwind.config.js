/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scroll': 'scroll 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '75%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        fadeInUp: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
