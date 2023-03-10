/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5047EB",
      white: "#FFFFFF",
      black: "#121212",
      gray: {
        "01": "#202022",
        "02": "#A1A1A1",
        "03": "#A0A0A1",
        "04": "#8E8E8E"
      },
      theme: {
        dark: "#151515",
        light: "#F7F7F8",
      },
    },
    fontFamily: {
      // chakra : ['Chakra Petch', 'sans-serif']
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
