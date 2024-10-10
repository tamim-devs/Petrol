/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      backgroundImage : {
        'banner': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/unsplash_vEoMKBdUIzs.jpg')",
        'part5': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/section1part5.jpg')",
        'part6': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/part6.jpg')",
        'part7': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/part7.jpg')",
        'part8': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/part8.jpg')",
        'midle1': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/section2part1.jpg')",
        'midle2': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/section2part2.jpg')",
        'midle3': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./src/assets/images/section2part4.jpg')",
        'maps': "url('./src/assets/images/Maps.jpg')"

      },
      width : {
        '760px': "760px"
      },
      lineHeight:{
        "72px": '72px'
      },
      backgroundColor:{
        "btnC": 'rgba(255, 255, 255, 0.50)'
      }
    },
  },
  plugins: [],
}