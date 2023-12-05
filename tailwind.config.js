/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: " #00fff9",
        bleuM: {
          100: "rgb(0, 41, 111)",
          200: "rgba(0, 41, 111,0.5)",
        },
        Secondbm: "#01629c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: "rounded",
  },
};
