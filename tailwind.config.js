/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#1544C0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}