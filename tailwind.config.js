/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#2DD865',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },

  plugins: [require("daisyui")],
}
// #2DD865