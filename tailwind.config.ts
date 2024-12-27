import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
        xl: "1920px",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        grey_dark: "#3B3B3B",
        grey_medium1: "#737373",
        grey_medium2: "#8F8F8F",
        grey_footer: "#404040",
        grey_button: "#585660",
        grey_light: "#EEEEEE",
      },
      fontSize: {
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "36px",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      maxWidth: {
        container: "1280px"
      },
      height: {
        card: "436px"
      },
      animation: {
        "spin-custom": "spin-custom 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
