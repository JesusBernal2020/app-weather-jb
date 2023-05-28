/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clima: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class"
};

