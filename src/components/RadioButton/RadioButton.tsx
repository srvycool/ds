import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { Box } from '../Box/Box';
import { Theme } from '../../theme';
import { MarginBottomProps } from 'styled-system';
import { Typography } from '../Typography/Typography';

export type RadioButtonProps = StyledComponentProps<'input', Theme, {}, never> &
  MarginBottomProps<Theme> & {
    headline: string;
    description: string;
  };

const StyledRadioButton = styled(Box)`
  cursor: pointer;
  transition: 100ms border-color ease-in-out;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.primary500};
  }
`;

const StyledRadio = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.colors.grey900};
  background-color: ${(props) => props.theme.colors.grey000};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;

  &:after {
    content: '';
    display: ${(props) => (props.checked ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.theme.colors.grey900};
    border-radius: 100%;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  headline,
  description,
  marginBottom,
  ...props
}) => {
  return (
    <StyledRadioButton
      as="label"
      display="flex"
      flexDirection="row"
      alignItems="center"
      position="relative"
      paddingTop="m"
      paddingBottom="m"
      paddingRight="l"
      paddingLeft="l"
      boxShadow="primary"
      border="primary"
      borderRadius="primary"
      width="100%"
      marginBottom={marginBottom}
    >
      <StyledInput type="radio" {...props} />
      <StyledRadio checked={props.checked || false} />
      <Box as="span" display="block" paddingLeft="l">
        <Typography variant="body1" color="grey900" display="block">
          {headline}
        </Typography>
        <Typography variant="body2" color="grey800">
          {description}
        </Typography>
      </Box>
    </StyledRadioButton>
  );
};
