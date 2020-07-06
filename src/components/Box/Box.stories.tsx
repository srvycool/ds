import React from 'react';
import { Box } from './Box';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';

export default {
  title: 'Box',
  component: Box,
};

export const All: React.FC = () => (
  <>
    <Box
      padding="xl"
      backgroundColor="primary100"
      borderRadius="primary"
      boxShadow="primary"
      marginBottom="m"
    >
      <Typography variant="heading1" color="grey900" marginBottom="s">
        Dolor irure anim qui in sit nulla
      </Typography>
      <Typography variant="body1" color="grey900">
        Quis sit pariatur culpa anim minim quis eiusmod pariatur veniam nostrud
        quis elit.
      </Typography>
    </Box>
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
      padding="xl"
      backgroundColor="grey100"
      borderRadius="primary"
      boxShadow="primary"
      marginBottom="m"
    >
      <Typography
        variant="body1"
        color="grey900"
        marginBottom={['l', 'zero']}
        marginRight={['zero', 'l']}
        textAlign={['center', 'left']}
      >
        Quis sit pariatur culpa anim minim quis eiusmod pariatur veniam nostrud
        quis elit.
      </Typography>
      <Button>Button</Button>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      padding="xl"
      borderBottom="primary"
    >
      <Typography variant="heading1" color="grey900">
        Dolor irure anim qui in sit nulla
      </Typography>
    </Box>
  </>
);
