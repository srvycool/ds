import React from 'react';
import { Box } from '../Box/Box';
import styled, { StyledComponentProps } from 'styled-components';
import { Theme } from '../../theme';

export type TextareaProps = StyledComponentProps<'textarea', Theme, {}, never>;

const StyledBox = styled(Box)`
  transition: 100ms border-color ease-in-out;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.primary500};
  }
`;

const StyledTextarea = styled.textarea`
  ${(props) => props.theme.typography.body1};
  color: ${(props) => props.theme.colors.grey900};
  border: 0;
  width: 100%;
  min-height: 120px;

  &:focus {
    outline: none;
  }
`;

export const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <StyledBox
      boxShadow="primary"
      border="primary"
      padding="s"
      width="100%"
      borderRadius="primary"
      position="relative"
    >
      <StyledTextarea {...props} />
    </StyledBox>
  );
};
