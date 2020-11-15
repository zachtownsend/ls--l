module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        '7\.5': '1.875rem',
        '9': '2.25rem',
        '18': '4.5rem',
        '72': '18rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
