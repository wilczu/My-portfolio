/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('https://i.pinimg.com/564x/22/b8/37/22b837ce4b35520a026a666295bf0f4e.jpg')",
      },
      keyframes: {
        "slide-bottom-in": {
          "0%": {
            transform: "translateY(-100%)"
          },
          "100%": {
            transform: "translateY(100%)"
          }
        },
        "slide-bottom-out": {
          "0%": {
            transform: "translateY(100%)"
          },
          "100%": {
            transform: "translateY(-100%)"
          }
        }
      },
      animation: {
        "slideBottomOut": "slide-bottom-out 0.5s ease-in",
        "slideBottomIn": "slide-bottom-in 0.5s ease-in",
      },
      screens: {
        extraTiny: '320px',
        xs: '467px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [],
}

