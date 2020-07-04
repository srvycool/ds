import { DefaultTheme } from 'styled-components';

const colors = {
  primary900: '#680C46',
  primary800: '#7E144D',
  primary700: '#9C2057',
  primary600: '#BB2F5F',
  primary500: '#DA4167',
  primary400: '#E86E80',
  primary300: '#F38D92',
  primary200: '#FBB7B4',
  primary100: '#FDDED9',

  grey900: '#493C3F',
  grey800: '#7D666C',
  grey700: '#9E8289',
  grey600: '#B19AA0',
  grey500: '#C1AEB3',
  grey400: '#CFC0C4',
  grey300: '#DBD0D3',
  grey200: '#E6DFE1',
  grey100: '#F1ECED',
  grey000: '#FFFFFF',
};

const breakpoints = ['576px', '768px', '992px', '1200px'];

const mediaQueries = {
  sm: `@media (min-width: ${breakpoints[0]})`,
  md: `@media (min-width: ${breakpoints[1]})`,
  lg: `@media (min-width: ${breakpoints[2]})`,
  xl: `@media (min-width: ${breakpoints[3]})`,
};

const space = {
  zero: '0',
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '40px',
  xxl: '60px',
  xxxl: '120px',
};

const shadows = {
  primary: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
};

const radii = {
  primary: '8px',
};

const borders = {
  primary: `2px solid ${colors.grey200}`,
};

const fonts = {
  primary: 'HammersmithOne',
  secondary: 'Montserrat',
};

const fontSizes = ['12px', '16px', '18px', '20px', '22px', '24px'];

export const theme: DefaultTheme = {
  colors,
  breakpoints,
  mediaQueries,
  space,
  shadows,
  radii,
  borders,
  fonts,
  fontSizes,
};
