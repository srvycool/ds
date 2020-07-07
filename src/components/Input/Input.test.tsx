import React from 'react';
import { render } from '../../utils/testing';
import { Input } from './Input';

describe('Input', () => {
  describe('without label', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Input
          value="Non culpa ullamco est laboris pariatur."
          onChange={() => null}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('without label', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Input
          label="With Label"
          value="Non culpa ullamco est laboris pariatur."
          onChange={() => null}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
