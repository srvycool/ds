import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src';

import 'typeface-hammersmith-one';
import 'typeface-montserrat';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);