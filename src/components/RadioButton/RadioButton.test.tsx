import React from 'react';
import { render } from '../../utils/testing';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  describe('checked', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <RadioButton
          headline="Et occaecat aliquip"
          description="Elit in fugiat minim do"
          checked={true}
          value="test"
          name="test"
          onChange={() => null}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('not checked', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <RadioButton
          headline="Et occaecat aliquip"
          description="Elit in fugiat minim do"
          checked={false}
          value="test"
          name="test"
          onChange={() => null}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
