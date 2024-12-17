/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: 'Kanit'
      },
      colors:{
        darkerblue:'#14252d',
        darkblue: '#243a66',
        lightblue: 'rgb(105, 170, 214)',
        gray: 'rgb(119, 119, 119)',
        gray2: 'hsl(0,0%,70%)',
        lightgray: 'hsl(60, 54.5%, 87.1%)',
        lightgray2: 'rgb(225, 236, 228)',
        darkgray: 'hsl(0, 0%, 20%)',
        darkgray2: 'hsl(0, 0%, 30%)',
        cream: "#fffad1",
        gold:'#c39d63'
      },
      backgroundImage:{
        hero: 'url("./assets/tugu1.png")'
      },
      gridTemplateColumns:{
        footnote: '16rem 8rem 10rem 15rem',
        info: '1.25rem, 15rem'
      },
      gridTemplateRows:{
        footnote: '4.7rem, auto',
        info:'repeat(4, auto)'
      },
      gridRow:{
        gridmap: '1/3'
      }, 
      boxShadow:{
        hero: '68px 117px 96px -36px rgba(0,0,0,1);',
        kegwrap: '5px 4px 9px 3px rgba(0,0,0,0.4)',
        kegselect: '0px 0px 12px 5px rgba(0,0,0,0.25) inset',
        kegimage: ' 0px 0px 170px -15px rgba(0,0,0,1) inset',
        boxproduk: "3px 3px 4px 1px rgba(0,0,0,0.5)",
        boxprodukhov: "8px 8px 12px 1px rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [],
}

