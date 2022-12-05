/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.{js,ts,jsx,tsx}',
    'src/containers/**/*.{js,ts,jsx,tsx}',
    'src/layouts/**/*.{js,ts,jsx,tsx}',
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.teal,
        error: colors.red,
        warning: colors.amber,
        info: colors.cyan,
        success: colors.emerald,
      },
      animation: {
        ripple: 'ripple 0.9s ease 1 forwards',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(10)', opacity: 0.375 },
          '100%': { transform: 'scale(35)', opacity: 0 },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
