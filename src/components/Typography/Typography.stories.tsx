import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const All: React.FC = () => (
  <>
    <Typography variant="heading1">Heading 1</Typography>
    <Typography variant="heading2">Heading 2</Typography>
    <Typography variant="heading3">Heading 3</Typography>
    <Typography variant="subtitle">Subtitle</Typography>
    <br />
    <Typography variant="body1">Body 1</Typography>
    <br />
    <Typography variant="body2">Body 2</Typography>
    <br />
    <Typography variant="caption">Caption</Typography>
  </>
);
