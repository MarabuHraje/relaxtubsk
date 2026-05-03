/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#ECEBCA',
        porcelain: '#FBF9FA',
        ink: '#232623',
        muted: 'rgba(35, 38, 35, .56)',
        wood: '#242623',
        copper: '#FFFFCF',
        night: '#242623',
        moss: '#232623',
      },
      fontFamily: {
        body: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Hatton', 'Georgia', 'serif'],
        serif: ['Grafier', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(14, 36, 24, 0.12)',
        lift: '0 30px 90px rgba(14, 36, 24, 0.2)',
      },
    },
  },
  plugins: [],
}
