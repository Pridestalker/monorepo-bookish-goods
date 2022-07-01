module.exports = {
  mode: 'jit',
  content: ['./templates/**/*.twig', './assets/scripts/**/*.js', './assets/scripts/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(265, 83%, 45%)',
        },
        secondary: {
          DEFAULT: 'hsl(47, 100%, 68%)',
        },
        red: {
          DEFAULT: 'hsl(357, 100%, 55%)',
        },
        green: {
          DEFAULT: 'hsl(122, 67%, 48%)',
        },
      },
    },
    container: {
      padding: '1.25rem',
      center: true,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
