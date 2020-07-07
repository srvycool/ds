import React, { useState } from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

export const Default: React.FC = () => {
  const [value, setValue] = useState(
    `Aute duis enim culpa nostrud veniam elit occaecat incididunt veniam elit dolor non velit amet. Voluptate nostrud qui cupidatat laborum nisi qui aute. Eu adipisicing mollit proident ad aliquip veniam in. Voluptate occaecat officia sunt quis quis non nostrud sint enim nisi.`
  );

  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
