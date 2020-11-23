module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  },
  theme: {
    container: {
      center: true,
      padding: '15px',
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
        primary: '#434CCC',
        seconday: '#F1B505',
        'brand-red': '#E94A47',
      },
      screens: {
        xl: '1200px',
      },
      fontSize: {
        '3xl': ['1.5rem', '1.3333'],
        '4xl': ['2.5rem', '1.2'],
        '5xl': ['3.5rem', '1.1429'],
        '6xl': ['4.5rem', '1.1111'],
      },
      spacing: {
        3.75: '0.9375rem', // 15
        4.5: '1.125rem', // 18
        4.75: '1.1875rem', // 19
        5.75: '1.4375rem', // 23
        6.5: '1.625rem', // 26
        7.25: '1.8125rem', // 29px
        7.5: '1.875rem', // 30px
        7.75: '1.9375rem', // 31

        9: '2.25rem', // 36
        10.5: '2.625rem', // 42
        13.75: '3.4375rem', // 55
        15: '3.75rem', // 60
        18: '4.5rem', // 72
        54: '13.5rem', // 216
        72: '18rem', // 288
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      opacity: {
        10: '0.1',
      },
    },
    typography: (theme) => ({
      default: {
        css: {

        },
      },
      light: {
        css: {
          color: theme('colors.white'),
        },
      },
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
