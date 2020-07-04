import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export const ThemeProvider: React.FC = ({ children }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
