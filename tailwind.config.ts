/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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
} satisfies Config
