/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#333',
        light: '#fff',
      },
    },
  },
  plugins: [require("daisyui")],
  // darkMode: 'class',
}

