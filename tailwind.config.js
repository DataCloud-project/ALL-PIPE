module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
