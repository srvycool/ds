import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import styled, { StyledComponentProps } from 'styled-components';
import { MarginBottomProps } from 'styled-system';
import { Theme } from '../../theme';

export type InputProps = StyledComponentProps<'input', Theme, {}, never> &
  MarginBottomProps<Theme> & {
    label?: string;
  };

const StyledInputBox = styled(Box)`
  transition: 100ms border-color ease-in-out;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.primary500};
  }
`;

const StyledInput = styled.input`
  ${(props) => props.theme.typography.body1};
  color: ${(props) => props.theme.colors.grey900};
  border: 0;
  width: 100%;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const Input: React.FC<InputProps> = ({
  label,
  marginBottom,
  ...props
}) => {
  return (
    <Box as="label" display="block" marginBottom={marginBottom}>
      {label && (
        <Typography
          display="block"
          variant="caption"
          color="grey800"
          marginBottom="xs"
        >
          {label}
        </Typography>
      )}
      <StyledInputBox
        as="span"
        display="block"
        boxShadow="primary"
        border="primary"
        padding="s"
        width="100%"
        borderRadius="primary"
        position="relative"
      >
        <StyledInput {...props} />
      </StyledInputBox>
    </Box>
  );
};
