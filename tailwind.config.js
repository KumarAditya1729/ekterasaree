/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#063B2C',
          light: '#0A4D3A',
          dark: '#03261C',
        },
        maroon: {
          DEFAULT: '#641B29',
          light: '#7D2234',
          dark: '#4B131E',
          deep: '#3B0C15',
        },
        ivory: {
          DEFAULT: '#F8F1E7',
          light: '#FDFBF7',
          dark: '#EFE5D6',
        },
        gold: {
          DEFAULT: '#B88A45',
          light: '#D4AF37',
          warm: '#C99D53',
          dark: '#8C6527',
          pale: '#F1E3CB',
        },
        charcoal: {
          DEFAULT: '#211B18',
          light: '#362E2A',
          muted: '#635A55',
        },
        beige: {
          DEFAULT: '#E8D8C4',
          light: '#F3EADB',
          dark: '#D5C1A7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(6, 59, 44, 0.15), 0 4px 6px -2px rgba(6, 59, 44, 0.05)',
        'gold-glow': '0 0 25px rgba(184, 138, 69, 0.25)',
      }
    },
  },
  plugins: [],
}
