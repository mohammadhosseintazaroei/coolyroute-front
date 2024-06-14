import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#09091F",
        dark: "#040417",
        light: "#12122F",
        lighter: "#292946",
      },
      light: "#FFFFFF",
      error: {
        main: "#FF3F3F",
        light: "#FF8080",
      },
    },
    extend: {
      boxShadow: {
        button: "0px 0px 13px 5px #00000050",
      },
    },
  },
  plugins: [],
};
export default config;
