/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // font_food:["Abril Fatface", "serif"],
        fontfamily: ["Molle", "cursive"],
        fontBody: ["Playfair Display", "serif"],
        fontLogo: ["Dancing Script", "cursive"],
        fontCursive: ["Caveat", "cursive"]

      },
      backgroundImage: theme => ({
        'couples': "url('https://source.unsplash.com/random/food')",
      })
    },
  },
  plugins: [],
}

