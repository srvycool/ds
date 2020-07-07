import React, { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Default: React.FC = () => {
  const [value, setValue] = useState(`Aute duis enim culpa nostrud`);

  return (
    <>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        marginBottom="l"
      />
      <Input
        label="With label"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
