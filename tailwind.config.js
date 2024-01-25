/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: [`"Kaushan Script"`,`cursive`]
      },
      backgroundImage: {
        'loginImage': "url('./assets/Login.jpeg')", 
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'midnight': '#f2f1ee',
        'green': '#05a25a',
        'greenHover':'#4ade80',
        'logBG': '#f2f1ee',
        'blue': '#0a57dd',
        'blueHover': '#3b82f6',
        'head': '#ea580c',
        'headHover' :'#fb923c',
        'bodyBg': '#e2e2e2',
      },
    },
  },
  plugins: [],
}