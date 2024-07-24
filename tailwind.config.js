import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1e1e1e" /* dark bg */,
          1000: "#0D0D0D" /* darker bg */,
        },
        primary: {
          50: "#ebf4ff",
          100: "#dbeaff",
          200: "#bed7ff",
          300: "#97bbff",
          400: "#6e92ff",
          500: "#4c6cff",
          600: "#3c4fff" /* main */,
          700: "#202fe2",
          800: "#1d2cb6",
          900: "#202d8f",
          950: "#131953",
        },
        hucare: "#E8C12F",
        fashionpo: "#CD0E1C",
        multidata: "#1D59AF",
        swarm: "#23955C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
