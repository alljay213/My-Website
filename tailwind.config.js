/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      filter: {
        white: "invert(100%) brightness(100%)",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
