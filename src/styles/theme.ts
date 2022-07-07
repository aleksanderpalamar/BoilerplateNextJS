import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#f4f4f5',
      '300': '#a8a8b3',
      '500': '#52525b',
      '700': '#3f3f46',
      '800': '#29292e',
      '850': '#27272a',
      '900': '#18181b ',
      '950': '#121214'
    },
    purple: {
      '400': '#996dff',
      '500': '#8257e5',
      '600': '#7b5adc',
      '700': '#6e4ccc',
      '800': '#5f3ebc',
      '900': '#4f2ebc'
    },
    pink: {
      '500': '#f779c3',
      '600': '#f05f9e',
      '700': '#e84880',
      '800': '#d82858',
      '900': '#b81234'
    },
    blue: {
      '50': '#334',
      '500': '#61DCFB',
      '600': '#4EC3F7',
      '700': '#3BA3E3',
      '800': '#2A8CD5',
      '900': '#1E6BC1',
      '950': '#1A5A9E'
    },
    yellow: {
      '500': '#FFCF00',
      '600': '#FFB300',
      '700': '#FF9100',
      '800': '#FF7100',
      '900': '#FF5100'
    },
    green: {
      '500': '#04D361',
      '600': '#04B854',
      '700': '#049A4F',
      '800': '#03844A',
      '900': '#026A44'
    }
  },

  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeight: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  styles: {
    global: {
      body: {                
        bg: 'gray.900',                
        color: 'gray.100'
      }
    }
  }
})