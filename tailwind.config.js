module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  //content busca todas las clases que usamos y elimina las que no usamos.
  content: [
    './components/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
  ], 
  theme: {
    extend: {
      colors: {
        'accent': '#333',
        'header': '#F9F1F1',
        'rosa': {
          100: '#F8F0F0',
          200: '#F9F1F1',
          300: '#EFD2D2',
          400: '#FFC4B2',
          500: '#FB9475',
        },
        'whatsapp':{
          100: '#25D366',
          200: '#075E54',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'etherealthin': ["EtherealThin", "sans-serif"],
        'ignitedreamsscript': ["IgniteDreamsScript", "sans-serif"],
        'bethadiyaregular': ["BethadiyaRegular", "sans-serif"],
        'quaylike': ["Quaylike", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",   
//     "./components/**/*.{js,ts,jsx,tsx}", 
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
