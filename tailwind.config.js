/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#010005",
        white: "#F5F1FE",
        gray: "#404040",
        accent: "#AF0808",
        primary: "#570BDA",
        elevation: "#131313",
      },
      fontFamily: {
        display: "Poppins",
      },
    },
  },
  plugins: [],
};
