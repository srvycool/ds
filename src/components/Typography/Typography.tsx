import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import {
  space,
  color,
  variant,
  typography,
  TextColorProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';
import { Theme } from '../../theme';

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'caption';

export type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  variant: TypographyVariant;
} & TextColorProps<Theme> &
  SpaceProps<Theme> &
  TextAlignProps<Theme>;

const variantMapping: {
  [index in TypographyVariant]: keyof JSX.IntrinsicElements;
} = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h2',
  subtitle: 'span',
  body1: 'span',
  body2: 'span',
  caption: 'span',
};

const StyledTypography = styled.span<TypographyProps>`
  margin: 0;
  ${color}
  ${space}
  ${typography}
  ${variant({ scale: 'typography' })}
`;

export const Typography: React.FC<StyledComponentProps<
  'span',
  Theme,
  TypographyProps,
  never
>> = ({ as, variant, ...props }) => {
  return (
    <StyledTypography
      as={as || variantMapping[variant]}
      variant={variant}
      {...props}
    />
  );
};
