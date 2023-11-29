/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif;"],
      },
      colors: {
        leoBlue: "rgba(0, 96, 156, 1)",
        leoGray: "rgba(238, 238, 238, 1)",
        leoPink: "rgba(192, 23, 162, 1)",
        footerBlue: "rgba(0, 96, 156, 1)",
      },
      backgroundImage: {
        hero: "url('assets/hero.png')",
      },
    },
  },
  plugins: [],
};
