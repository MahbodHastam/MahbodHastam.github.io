import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        square: ['Silkscreen', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#EFEFEF',
        text: '#0e0e0e',
        white: {
          DEFAULT: '#FFFFFF',
          100: '#f9f9f9',
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
