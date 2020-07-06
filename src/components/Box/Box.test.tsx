import React from 'react';
import { render } from '../../utils/testing';
import { Box } from './Box';

describe('Box', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="xl"
        backgroundColor="grey100"
        borderRadius="primary"
        boxShadow="primary"
        marginBottom="m"
      >
        Sit eiusmod ullamco eiusmod non cillum proident.
      </Box>
    );

    expect(container).toMatchSnapshot();
  });
});
