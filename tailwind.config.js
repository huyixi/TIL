/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem', // 可以调整这个值来控制整体宽度
      },
    },
  },
  plugins: [],
}
