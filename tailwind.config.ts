import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = withTV({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./globalStyles/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 0px 13px 5px #00000050",
        card: "0px 0px 13px 5px #00000050",
      },
      colors: {
        primary: {
          DEFAULT: "#09091F",
          dark: "#040417",
          light: "#12122F",
          lighter: "#1D1D3D",
        },
        light: "#FFFFFF",
        error: {
          DEFAULT: "#FF3F3F",
          light: "#FF8080",
        },
        success: {
          DEFAULT: "#395B32",
          light: "#61735D",
        },
        neutral: {
          DEFAULT: "#929292",
          light: "#C1C1C1",
        },
      },
    },
  },
  plugins: [],
});
export default config;
