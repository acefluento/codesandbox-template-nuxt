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
          blue: '#C41230',
          'blue-dark': '#A0101E',
          'blue-light': '#E63050',
          orange: '#FF6B2C',
          'orange-dark': '#e55a1c',
          dark: '#000000',
          'dark-2': '#090909',
          'dark-3': '#131313',
          gray: '#8A8AA0',
          'gray-light': '#F5F5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #000000 0%, #090909 50%, #131313 100%)',
        'gradient-cta': 'linear-gradient(135deg, #C41230 0%, #E63050 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(196,18,48,0.08) 0%, rgba(230,48,80,0.04) 100%)',
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
