import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFAE0",
          100: "#FFF7CC",
          200: "#FFEFAC",
          300: "#FFE483",
          400: "#FFDA64",
          500: "#FFC831",
          600: "#DBA523",
          700: "#B78418",
          800: "#93650F",
          900: "#7A4F09",
        },
        gray: {
          25: "#F9FAFB",
          50: "#F6F7F9",
          100: "#F3F5F7",
          200: "#EFF2F5",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
        },
        white: "#FFFFFF",
        white_01: "#C1C0E5",
        white_02: "#919EAB",
        black: "#000000",
        black_01: "#15141B",
        black_02: "#1F1E24",
        black_03: "#191922",
        black_04: "#201E2C",
        black_05: "#191922",
      },
      fontFamily: {
        "heading-font": "var(--font-poppins)",
        "body-font": "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
