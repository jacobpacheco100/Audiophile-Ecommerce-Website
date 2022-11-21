/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#D87D4A',
        orangeLight: '#fbaf85',
        black: '#101010',
        gray: '#B5B5B5',
        grayLight: '#F1F1F1',
        bg: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontSize: {
        h1: '56px',
        h2: '40px',
        h3: '32px',
        h4: '28px',
        h5: '24px',
        h6: '18px',
        overline: '14px',
        subtitle: '13px',
        body: '15px',
      },
      screens: {
        tablet: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
