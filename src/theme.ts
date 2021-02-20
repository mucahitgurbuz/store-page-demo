import { css, space, ThemeConfig } from 'bumbag'

const theme: ThemeConfig = {
  global: {
    fontSize: 14,
    styles: {
      base: css`
        html,
        body {
          background-color: #E5E5E5;
        }
        .DayPickerInput {
          width: 100%;
        }
        form {
          width: 100%;
        }
        button::focus {
          outline: none !important;
        }    
      `,
    },
  },

  fonts: {
    default: 'Open Sans, sans-serif',
  },
  fontWeights: {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    normal: 700,
    ExtraBlack: 900,
  },
  palette: {
    primary: '#1EA4CE',
    primary100: '#147594',

    text: '#525252',

    white: '#ffffff',
    white100: '#FEFEFE',
    ghostWhite: '#F2F0FD',

    black100: 'E0E0E0',
    black300: '#A8A8A8',
    black400: '#697488',
    black: '#6F6F6F',
    black600: '#525252',
    black700: '#191919',

    grey100: '#F3F0FE',
    grey300: '#E5E5E5',
  },
  borderRadii: {
    default: '6px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '50%',
  },
  borders: {
    primary: {
      color: '#F3F0FE',
      width: '1px',
    },
    grey: {
      color: '#E0E0E0',
      width: '1px',
    },
  },
  altitudes: {
    100: 'box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4)',
  },
  spacing: {
    xs /* 4 */: space(1, 'minor'),
    sm /* 8 */: space(2, 'minor'),
    md /* 12 */: space(3, 'minor'),
    lg /* 16 */: space(4, 'minor'),
    xl /* 20 */: space(5, 'minor'),
    '2xl' /* 24 */: space(6, 'minor'),
    '3xl' /* 28 */: space(7, 'minor'),
    '4xl' /* 32 */: space(8, 'minor'),
    '5xl' /* 36 */: space(9, 'minor'),
    '6xl' /* 40 */: space(10, 'minor'),
    '7xl' /* 44 */: space(11, 'minor'),
    '8xl' /* 48 */: space(12, 'minor'),
    xxl /* 96 */: space(24, 'minor'),
  },
}

export default theme
