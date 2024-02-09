/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 617%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: ["Rubik", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}

