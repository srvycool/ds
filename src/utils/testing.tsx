import React from 'react';
import {
  render as tlrender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult {
  return tlrender(<ThemeProvider>{ui}</ThemeProvider>, options);
}
