import React from 'react';
import { render } from '../../utils/testing';
import { Typography } from './Typography';

describe('Typography', () => {
  describe.each`
    variant
    ${'heading1'}
    ${'heading2'}
    ${'heading3'}
    ${'subtitle'}
    ${'body1'}
    ${'body2'}
    ${'caption'}
  `('$variant', ({ variant }) => {
    it('should match snapshot', () => {
      const { container } = render(
        <Typography variant={variant}>Text</Typography>
      );
      expect(container).toMatchSnapshot();
    });
  });
});
