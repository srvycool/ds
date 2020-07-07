import React from 'react';
import { render } from '../../utils/testing';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Textarea
        value="Non culpa ullamco est laboris pariatur."
        onChange={() => null}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
