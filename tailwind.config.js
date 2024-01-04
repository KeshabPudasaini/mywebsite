/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': "'Roboto', 'sans-serif'"
    },
    extend: {
      spacing: {
        '5px': '5px'
      },
      colors: {
        'primary': '#fe6403',
        'headingColor': '#563a35',
        'bgShade': '#fff5f5',
        'dribble': '#3d0b01',
        'body': '#53201c'
      }
    },
  },
  plugins: [],
}

