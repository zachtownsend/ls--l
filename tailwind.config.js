module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      display: ['DM Serif Display', 'serif'],
      body: ['DM Sans', 'sans-serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#434CCC',
        'seconday': '#F1B505',
        'brand-red': '#E94A47'
      },
      screens: {
        'xl': '1200px',
      },
      fontSize: {
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem'
      },
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
