/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      default :'1rem',
      sm :'2rem',
      lg :'3rem',
      xl :'4rem',
    },
    extend: {
      colors:{
        primary : '#333646',
        second : '#252734',
        navcolor: '#656773',
        textcolor: '#b5b6bc',
        logocolor :'#ffc25c' ,
        bocxcolor : '#ffaf29' ,
        boxcolorgray:'#424657'
      },
    },
  },
  plugins: [],
}

