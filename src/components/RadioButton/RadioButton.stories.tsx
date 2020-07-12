import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const Default: React.FC = () => {
  const [value, setValue] = useState('MULTIPLE_CHOICE');

  return (
    <form>
      <RadioButton
        headline="Multiple Choice"
        description="Elit in fugiat minim do"
        onChange={(event) => setValue(event.target.value)}
        checked={value === 'MULTIPLE_CHOICE'}
        value="MULTIPLE_CHOICE"
        marginBottom="m"
        name="answer"
      />
      <RadioButton
        headline="Text Field"
        description="Elit in fugiat minim do"
        checked={value === 'TEXTFIELD'}
        value="TEXTFIELD"
        name="answer"
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};
