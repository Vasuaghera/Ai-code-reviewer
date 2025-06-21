/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Fira Code', 'Fira Mono', 'monospace'],
      },
      colors: {
        'code-bg': '#0c0c0c',
        'code-border': '#1f1f1f',
        'review-bg': '#1a1a1a',
        'review-text': '#e5e5e5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}