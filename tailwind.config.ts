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
          50: "#FDF0E8",
          100: "#FADACA",
          200: "#F5B18F",
          300: "#EF8A5C",
          400: "#E85D04",
          500: "#DE4A15",
          600: "#D62828",
          700: "#B32020",
          800: "#8C1A1A",
          900: "#671414",
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
