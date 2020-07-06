import React from 'react';
import { render } from '../../utils/testing';
import { Logo } from './Logo';

describe('Logo', () => {
  it('should match snapshot', () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
