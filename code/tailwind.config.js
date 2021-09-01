module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/styles/**/*.{css}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {},
   variants: {
     extend: { fontSmoothing: ['hover', 'focus'],},
     animation: ['responsive', 'motion-safe', 'motion-reduce']
   },
   plugins: [],
 }