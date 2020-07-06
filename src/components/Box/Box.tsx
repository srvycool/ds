import styled from 'styled-components';
import {
  compose,
  space,
  color,
  shadow,
  flexbox,
  layout,
  border,
  BackgroundColorProps,
  MarginBottomProps,
  ShadowProps,
  PaddingProps,
  BoxShadowProps,
  FlexboxProps,
  BorderProps,
  LayoutProps,
} from 'styled-system';
import { Theme } from '../../theme';

export type BoxProps = BackgroundColorProps<Theme> &
  MarginBottomProps<Theme> &
  ShadowProps<Theme> &
  PaddingProps<Theme> &
  BoxShadowProps<Theme> &
  FlexboxProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme>;

export const Box = styled.div<BoxProps>(
  compose(color, space, shadow, flexbox, border, layout)
);
