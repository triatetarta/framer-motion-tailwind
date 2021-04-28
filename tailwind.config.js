module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        2: 'repeat(2, auto)',
      },
      cursor: {
        grab: 'grab',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
