/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./build/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        'fluid-1': 'clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)',
        'fluid-2': 'clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '46': '11.5rem',
    },
    },
    
    plugins: [],
  }
}
