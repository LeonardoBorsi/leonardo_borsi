import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3c4fff",
              foreground: "#FFF",
            },
            hucare: "#E8C12F",
            fashionpo: "#CD0E1C",
            multidata: "#1D59AF",
            swarm: "#23955C",
          },
        },
        dark: {
          colors: {
            background: "#1E1E1E",
            primary: {
              DEFAULT: "#3c4fff",
              foreground: "#FFF",
            },
            hucare: "#E8C12F",
            fashionpo: "#CD0E1C",
            multidata: "#1D59AF",
            swarm: "#23955C",
          },
        },
      },
    }),
  ],
};
