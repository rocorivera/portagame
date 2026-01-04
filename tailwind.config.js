export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty:{
        'transform':'transform',
      },
      perspective:{
        'custom':'1500px',
      },
      animation:{
        'epic-entrance':'fadeZoom 1.2s ease-out forwards',
      },
      keyframes:{
        fadeZoom:{
          '0%':{opacity:'0', transform: 'scale(0.8) rotate(-5deg)'},
          '100%':{opacity:'1',transform:'scale(1) rotate(0deg)'},
        }
      }
    },
  },
  plugins: [],
}
