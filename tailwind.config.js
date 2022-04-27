module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    
    extend: {
      colors: {
        'dark-primary': '#272727',
        'dark-est':'#252424',
        'gray-highlight': '#353535',
        'gray-accent': 'rgb(123,122,122)',
        'white-primary': 'rgb(230,230,230)',
      },
    },
  },
  plugins: [],
}
