const BASE_FONT = 16
const BASE_LINE_HEIGHT = 1.8
const BASELINE = BASE_FONT * BASE_LINE_HEIGHT

const BREAKPOINTS = ['600px', '900px', '1200px', '1800px']

const FONT_SIZES = [12, 14, 16, 18, 24, 32, 48, 56]
const LINE_HEIGHTS = FONT_SIZES.map(
  f => (Math.ceil(f / BASELINE) * BASELINE) / f
)

export const TEXT_MEGA = {
  fontSize: [5, 6],
  lineHeight: [4, 7],
}

export const TEXT_HUGE = {
  fontSize: [5],
  lineHeight: [4],
}

export const TEXT_XLARGE = {
  fontSize: [4],
  lineHeight: [4],
}

export const TEXT_LARGE = {
  fontSize: [3],
  lineHeight: [3],
}

export const COLORS = {
  // ThemeUI Shortcuts.
  text: '#ecf3f9',
  background: '#060e14',
  highlight: 'rgba(255, 255, 255, 0.1)',

  blue: {
    base: '#1cdaf4',
    50: '#d9feff',
    100: '#adf4fe',
    200: '#7fecfa',
    300: '#50e3f8',
    400: '#24dbf4',
    500: '#0bc2db',
    600: '#0097ab',
    700: '#006d7b',
    800: '#00424b',
    900: '#00181c',
  },
  grey: {
    base: '#23292f',
    50: '#ecf3f9',
    100: '#d3d9de',
    200: '#b8bfc6',
    300: '#9ca6af',
    400: '#7f8b98',
    500: '#66737f',
    600: '#4f5963',
    700: '#384047',
    800: '#21262c',
    900: '#060e14',
  },
}

const baselineMultiple = w => theme => theme.baseline * w

export default {
  baseline: BASELINE,
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],

  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,

  breakpoints: BREAKPOINTS,

  colors: COLORS,

  fonts: {
    body: '"Inter UI", -apple-system, sans-serif',
    heading: '"Inter UI", -apple-system, sans-serif',
  },

  styles: {
    root: {
      color: '#e8ecee',
      fontFamily: 'body',
      fontSize: [1, 2],
      lineHeight: 3,
    },

    h1: {
      ...TEXT_MEGA,

      '& a, & a:visited': {
        color: 'inherit',
      },
    },

    blockquote: {
      ...TEXT_LARGE,
      color: 'avayellow.100',
      fontFamily: 'freight',
      mb: baselineMultiple(1.25),
    },
    p: {
      mt: 0,
      mb: baselineMultiple(1),
    },

    a: {
      borderBottom: '1px solid',
      borderColor: 'blue.base',
      color: 'inherit',
      textDecoration: 'none',
      transition: 'all 250ms ease',
      ':hover': {
        color: 'blue.base',
        borderColor: 'blue.200',
        textDecoration: 'none',
      },
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
  },
}
