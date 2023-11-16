import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "30rem", //480px
      md: "48rem", //768px
      lg: "64rem", //1024px
      xl: "80rem", //1280px
      xxl: "100rem", //1600px
    },
    colors: {
      bg_black: "#0F0F0F",
      primary: "#1F1F21",
      secondary: "#8B9093",
      white: "#E9E9E9",
    },
    extend: {
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        display: ["7rem", { lineHeight: "normal", fontWeight: "500" }], //112px 136px == 8.5
        h1: ["3.25rem", { lineHeight: "normal", fontWeight: "500" }], //52px
        h2: ["2rem", { lineHeight: "normal", fontWeight: "500" }], //32px
        h3: ["1.25rem", { lineHeight: "normal", fontWeight: "500" }], //20px
        h4: ["1.25rem", { lineHeight: "normal" }], //20px
        h5: ["1rem", { lineHeight: "normal" }], //16px
        mini: ["0.625rem", { lineHeight: "normal" }], //10px
      },
    },
  },
  plugins: [],
};
export default config;
