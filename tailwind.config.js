/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#4801FF',
        'yellowAc': '#ffff00'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}