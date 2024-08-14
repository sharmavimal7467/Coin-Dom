/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
      screens: {
        'xxs': '220px',
        'xs': '480px',   // Custom breakpoint for extra-small devices
        'sm': '640px',   // Default small devices
        'md': '768px',   // Default medium devices
        'lg': '1024px',  // Default large devices
        'xl': '1280px',  // Default extra-large devices
        '2xl': '1536px', // Default 2xl devices
      }
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      darkRed:"#DC2626",
      lightCyan:"#00FFFF",
      twitterColor:"	#1DA1F2",
      facebook:"#1877F2",
      git:"#4078c0",
      reddit:"#FF5700"
    },
    fontSize:{
      sm: "14px", 
      md: "18px", 
      lg: "24px", 
      xl: "32px", 
      base: "16px"
    }
  },
 

  plugins: [],
}
