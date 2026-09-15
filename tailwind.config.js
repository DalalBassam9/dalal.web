/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      colors: {
        navy: {
          DEFAULT: '#0E1B3D',
          50: '#EEF1F8',
          100: '#D6DCEE',
          400: '#3D4E82',
          500: '#1B2C5C',
          600: '#132148',
          700: '#0E1B3D',
          800: '#0A1430',
          900: '#070E20',
        },
        accent: {
          DEFAULT: '#5B5FEF',
          light: '#EEF0FF',
        },
        surface: '#F6F8FC',
        muted: '#64748B',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(14, 27, 61, 0.12)',
        card: '0 4px 20px -4px rgba(14, 27, 61, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
