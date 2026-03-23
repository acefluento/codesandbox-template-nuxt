/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1877F2',
          'blue-dark': '#0d6efd',
          'blue-light': '#4299e1',
          orange: '#FF6B2C',
          'orange-dark': '#e55a1c',
          dark: '#0A0A0F',
          'dark-2': '#111118',
          'dark-3': '#1A1A25',
          gray: '#8A8AA0',
          'gray-light': '#F5F5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A0A0F 0%, #111118 50%, #1A1A25 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1877F2 0%, #4299e1 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(24,119,242,0.08) 0%, rgba(66,153,225,0.04) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
