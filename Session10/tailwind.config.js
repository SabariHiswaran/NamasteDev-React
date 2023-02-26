/**  @type {import('tailwindcss').Config}  */
module.exports = {
  content: [
    // "./src/**/*.{html,js,ts,jsx,tsx}"
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
      "rating-green" : "#48c479",
      "rating-orange" : "#db7c38",
      "offer-color" : "#8a584b"
      },
    },
  },
  plugins: [],
}
