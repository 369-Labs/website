module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/styles/**/*.{css}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
   },
   variants: {
     extend: {
      fontSmoothing: ['hover', 'focus'],},
     animation: ['responsive', 'motion-safe', 'motion-reduce']
   },
   plugins: [],
 }