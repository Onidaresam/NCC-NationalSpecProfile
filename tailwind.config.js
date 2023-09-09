/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'spec': '2px 4px 10px 0px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}