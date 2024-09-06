module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        themeRed: '#c64959',
      },
      keyframes: {
        'spin-clockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-clockwise': 'spin-clockwise 0.5s linear infinite', // Adjust duration here
      },
    },
  },
  plugins: [],
}
