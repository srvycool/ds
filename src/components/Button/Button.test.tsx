import React from 'react';
import { render } from '../../utils/testing';
import { Button } from './Button';

describe('Button', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});
