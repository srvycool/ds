import React from 'react';
import { render } from '../../utils/testing';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>I am a children</ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
