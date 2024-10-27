import { BaseColors, nextui } from "@nextui-org/theme";
import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
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
  darkMode: ["class"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sucess: {
          DEFAULT: "hsl(var(--success))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
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
    function ({ addBase }: PluginAPI) {
      addBase({
        ":root": {
          "--color-primary-default": "#09091F",
          "--color-primary-light": "#12122F",
          "--color-primary-lightest": "#23234A",
          // define other variables as needed
        },
      });
    },
    require("tailwindcss-animate"),
  ],
});
