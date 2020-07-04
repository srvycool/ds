import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary: React.FC = () => (
  <Button onClick={action('clicked')}>Button</Button>
);
