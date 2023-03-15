/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
        serif: ['Kanit', ...defaultTheme.fontFamily.serif],
        mono: ['Kanit', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: colors.orange,
        secondary: colors.teal,
        error: colors.red,
        warning: colors.amber,
        info: colors.cyan,
        success: colors.emerald,
        'brutal-blue': '#38dbff',
        'brutal-orange': '#ffb443',
        'brutal-red': '#ff5d5d',
        'brutal-yellow': '#fff503',
        'brutal-green': '#00ff75',
        'brutal-lime-green': '#32cd32',
        'brutal-seafoam': '#3ded97',
        'brutal-purple': '#dd7dff',
        'brutal-pink-flamingo': '#fda4ba',
        'brutal-black': '#383838',
      },
      backgroundImage: {
        dotted:
          'radial-gradient(rgb(0 0 0 / 3%) 5%, transparent 5%), radial-gradient(rgb(0 0 0 / 3%) 5%, transparent 5%)',
      },
      backgroundSize: {
        dotted: '120px 120px',
      },
      backgroundPosition: {
        dotted: '0 0, 60px 60px',
      },
      boxShadow: {
        neubrutalism:
          '0px 1px 0px var(--tw-shadow), 1px 0px 0px var(--tw-shadow), 1px 1px 0px var(--tw-shadow), 4px 4px 0px var(--tw-shadow)',
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
  plugins: [],
};
