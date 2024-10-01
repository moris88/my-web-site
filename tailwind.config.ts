/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      primary: {
        DEFAULT: '#05ffff',
      },
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
    },
    animation: {
      blink: 'blink 1s step-end infinite',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
