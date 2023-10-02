/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dela': ['Dela Gothic One', 'cursive'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

