import React from 'react';
import { render } from '../../utils/testing';
import { LogoSymbol } from './LogoSymbol';

describe('LogoSymbol', () => {
  it('should match snapshot', () => {
    const { container } = render(<LogoSymbol fill="primary500" />);

    expect(container).toMatchSnapshot();
  });
});
