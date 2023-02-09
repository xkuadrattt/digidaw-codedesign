/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB802",
      },
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
        acsent: ["Noto Sans Display", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/img/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
