/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Navtextcolor:"text-gray-600"
      },
    fontFamily: {
        NavMenuFont: ['Montserrat', 'sans-serif'],
        subMenuFont:['Karla', 'sans-serif']
    },
    },
    // backgroundImage: {
    //   'subnavbg': "url('/assets/subnavbg2.png')"
    // }
  },
  plugins: [],
}

