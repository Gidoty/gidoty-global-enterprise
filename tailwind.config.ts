import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EAF3EE",
          100: "#CFE4D8",
          200: "#A3C9B4",
          300: "#77AD90",
          400: "#4F8F70",
          500: "#2D6A4F",
          600: "#24593F",
          700: "#1B4332",
          800: "#153529",
          900: "#0F261D",
        },
        accent: {
          50: "#FBEEE8",
          100: "#F5D6C5",
          200: "#EBAF8F",
          300: "#DE8760",
          400: "#CC633C",
          500: "#BC4B27",
          600: "#A23D1E",
          700: "#7F2F17",
          800: "#5F2411",
          900: "#43190B",
        },
        gold: {
          50: "#FEF9E7",
          100: "#FCEFC0",
          200: "#F8DD7F",
          300: "#F0C93E",
          400: "#E2B012",
          500: "#D9A404",
          600: "#B78603",
          700: "#8F6803",
          800: "#6B4E03",
          900: "#493602",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          100: "#FFFFFF",
          200: "#FDFBF7",
          300: "#F7F2E8",
          400: "#EFE7D6",
        },
        charcoal: {
          DEFAULT: "#2B2A28",
          50: "#F5F4F2",
          100: "#E6E3DE",
          300: "#A9A49C",
          500: "#6B665E",
          700: "#433F39",
          900: "#211F1C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
