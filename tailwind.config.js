module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    
    extend: {
      colors: {
        'dark-primary': 'rgb(36,36,36)',
        'dark-est':'rgb(30,29,29)',
        'dark-active': 'rgb(47,47,47)',
        'gray-highlight': '#353535',
        'gray-accent': 'rgb(123,122,122)',
        'white-primary': 'rgb(230,230,230)',
      },
    },
  },
  plugins: [],
}
