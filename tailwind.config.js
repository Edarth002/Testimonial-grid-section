/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Moderateviolet: " hsl(263, 55%, 52%)",
        Verydarkgrayishblue: "hsl(217, 19%, 35%)",
        Verydarkblackishblue: "hsl(219, 29%, 14%)",
        Lightgray: " hsl(0, 0%, 81%)",
        Lightgrayishblue: "hsl(210, 46%, 95%)",
      },
      minWidth: {
        small: "300px",
      },
    },
  },
  plugins: [],
};