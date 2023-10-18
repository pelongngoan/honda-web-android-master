/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important : true,
  theme: {
    ...defaultTheme,
    colors  : {
      ...defaultTheme.colors,
      primary:'',
      white:'#FFFFFF',
      text:{
        DEFAULT:'#3dd164',
        light:'#3dd164',
      },
      light:{
        DEFAULT:'#e5abab',
        lighter:'#16dbad',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

