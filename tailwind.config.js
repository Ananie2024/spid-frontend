/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SPID Colors
        blue: {
          500: '#0e5fc0',
          600: '#0a3d7a',
        },
        yellow: {
          400: '#ffbf4d',
          500: '#f5a623',
          600: '#d97706',
        },
        green: {
          500: '#22c55e',
          600: '#15803d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
