/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    xxs: "395px",
    xs: "480px",
    ss: "620px",
    sm: "768px",
    ms: "860px",
    smd: "910px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
