/** @type {import('tailwindcss').Config} */

import { heroui } from '@heroui/react'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      primary: {
        DEFAULT: '#2563eb',
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
  plugins: [heroui()],
}
