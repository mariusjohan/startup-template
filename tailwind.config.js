const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        colors: {
            black: colors.black,
            gray: colors.blueGray,
            white: colors.white,
            primary: colors.indigo,
            secondary: colors.indigo,
            transparent: colors.transparent
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.075)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.45)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.09)',
            none: 'none',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
