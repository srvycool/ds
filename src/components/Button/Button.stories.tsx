import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text: React.FC = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);
