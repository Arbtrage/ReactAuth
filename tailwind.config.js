/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          background: "var(--background)",
          color:"var(--color)"
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}