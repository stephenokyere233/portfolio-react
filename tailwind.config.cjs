/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
