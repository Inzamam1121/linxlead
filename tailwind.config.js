/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primblue:"#33CCFF",
        tempyellow:"#FFDE5C"
      },
      fontFamily:{
        pop:"Poppins",
        lato:"Lato"
      },
      backgroundImage:{
        gradientblue:"linear-gradient(190.18deg, rgba(51, 204, 255, 0.1) 35.47%, rgba(51, 204, 255, 0.16) 47.99%, rgba(51, 204, 255, 0.48) 92.39%)"
      },
      boxShadow:{
        shadowwhat:"0px 4px 9px 0px #0000000D",
        shadowfaq:"1px 0px 16.3px 0px #00000040"
      }
    },
  },
  plugins: [],
}

