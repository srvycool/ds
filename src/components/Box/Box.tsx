import styled from 'styled-components';
import {
  compose,
  space,
  color,
  shadow,
  boxShadow,
  flexbox,
  display,
  border,
  BackgroundColorProps,
  MarginBottomProps,
  ShadowProps,
  PaddingProps,
  BoxShadowProps,
  FlexboxProps,
  DisplayProps,
  BorderProps,
} from 'styled-system';
import { Theme } from '../../theme';

export type BoxProps = BackgroundColorProps<Theme> &
  MarginBottomProps<Theme> &
  ShadowProps<Theme> &
  PaddingProps<Theme> &
  BoxShadowProps<Theme> &
  FlexboxProps<Theme> &
  DisplayProps<Theme> &
  BorderProps<Theme>;

export const Box = styled.div<BoxProps>(
  compose(color, space, shadow, boxShadow, flexbox, display, border)
);
