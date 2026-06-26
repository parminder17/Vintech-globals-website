/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8E8',
          100: '#F9ECBF',
          200: '#F5E095',
          300: '#F1D46B',
          400: '#EDC841',
          500: '#C9A84C',
          600: '#B08A2A',
          700: '#8B6B1F',
          800: '#664D17',
          900: '#41300E',
        },
        navy: {
          50: '#E8ECF3',
          100: '#BFC9DB',
          200: '#95A6C3',
          300: '#6B84AB',
          400: '#416293',
          500: '#2A4A7B',
          600: '#1A355E',
          700: '#0F2444',
          800: '#0B1A30',
          900: '#06101E',
          950: '#030814',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'counter': 'counter 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
