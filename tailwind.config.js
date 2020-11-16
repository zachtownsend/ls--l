module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"]
  },
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      display: ['DM Serif Display', 'serif'],
      body: ['DM Sans', 'sans-serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    letterSpacing: {
      tight: '-0.3125em',
      normal: 0,
      wide: '0.3125em',
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
        '3xl': ['1.5rem', '1.3333'],
        '4xl': ['2.5rem', '1.2'],
        '5xl': ['3.5rem', '1.1429'],
        '6xl': ['4.5rem', '1.1111']
      },
      spacing: {
        '7\.5': '1.875rem',
        '9': '2.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '72': '18rem'
      }
    },
    typography: {
      blockHero: {
        css: {
          'h1,h2,h3,h4': {
            marginBottom: '1.1875rem',
          },
          '.button': {
            marginTop: '1.5625rem'
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
