/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light", "dark"],
  },
}

