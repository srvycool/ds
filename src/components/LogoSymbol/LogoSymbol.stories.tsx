import React from 'react';
import { LogoSymbol } from './LogoSymbol';
import { Box } from '../Box/Box';

export default {
  title: 'LogoSymbol',
  component: LogoSymbol,
};

export const Default: React.FC = () => (
  <Box width="300px">
    <LogoSymbol fill="primary500" />
  </Box>
);
