/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#232423',
        white: '#fff',
        secondary: '#1183f5',
        secondaryDark: '#0d72d6',
      },
      fontFamily: {
        sans: ['Ubuntu'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
