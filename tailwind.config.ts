import { BaseColors, nextui } from "@nextui-org/theme";
import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  foreground: string; // contrast color
  DEFAULT: string;
  light: string;
  lighter: string;
  dark: string;
  darker: string;
  lightest: string;
  midnight: string;
};
type ThemeColors = BaseColors & {
  default: ColorScale;
  primary: ColorScale;
  light: ColorScale;
  error: ColorScale;
  success: ColorScale;
  neutral: ColorScale;
};

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    "./pages/**/*.{js,ts,jsx, tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./globalStyles/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 0px 13px 5px #00000050",
        card: "0px 0px 13px 5px #00000050",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        main: {
          colors: {
            primary: {
              DEFAULT: "#09091F",
              foreground: "#fff",
              dark: "#040417",
              light: "#12122F",
              lighter: "#1D1D3D",
              lightest: "#23234A",
              midnight: "#171732",
            },
            light: {
              DEFAULT: "#fff",
            },
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
              lighter: "#FFFFFF",
            },
          } as ThemeColors,
        },
      },
    }),
  ],
});
