import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../../theme';

export type LogoSymbolProps = React.SVGProps<SVGSVGElement> & {
  fill: keyof Theme['colors'];
};

export const LogoSymbol: React.FC<LogoSymbolProps> = ({ fill, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <svg viewBox="0 0 300 300" fill="none" {...props}>
      <path
        d="M261.202 300H38.765c-12.751 0-24.794-6.334-31.878-16.539-7.084-10.557-8.855-23.577-4.605-35.542L85.52 25.169C90.832 11.095 103.23 1.594 118.105.186c14.877-1.408 29.045 5.278 36.837 17.947l139.2 222.75c7.439 11.964 7.793 26.744 1.063 39.06C288.121 292.61 275.37 300 261.202 300z"
        fill={theme.colors[fill]}
      />
    </svg>
  );
};
