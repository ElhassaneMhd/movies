/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: " #00fff9",
        bleuM: {
          100: "rgb(51,51,51)",
          200: "rgba(102,102,102,0.5)",
          300: "rgb(0,0,0,0.9)", // Add another shade
          400: "rgba(120,0,255,0.3)",
        },
        Secondbm: "rgb(120,0,255)",
      },
      screens: {
        mobile: { min: "250px", max: "640" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: "rounded",
  },
};
