import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary900: string;
      primary800: string;
      primary700: string;
      primary600: string;
      primary500: string;
      primary400: string;
      primary300: string;
      primary200: string;
      primary100: string;

      grey900: string;
      grey800: string;
      grey700: string;
      grey600: string;
      grey500: string;
      grey400: string;
      grey300: string;
      grey200: string;
      grey100: string;
      grey000: string;
    };

    breakpoints: string[];

    mediaQueries: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    space: {
      zero: number;
      xxs: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };

    shadows: {
      primary: string;
    };

    radii: {
      primary: number;
    };

    borders: {
      primary: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSizes: number[];
  }
}
