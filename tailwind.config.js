/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      colors: {
        // ## Colors
        // ### Primary
        cl_White: "hsl(0, 0%, 100%)",
        cl_Black: "hsl(0, 0%, 0%)",
        cl_DarkGray: "hsl(0, 0%, 55%)",
        cl_VeryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
}
