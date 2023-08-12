/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EFD000",
        "secondary-color": "#666666",
        "bg-color": "#FFFFF",
      },

      fontFamily: {
        "primary-font": ["Plus Jakarta Sans", "sans-serif"],
        "secondary-font": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
