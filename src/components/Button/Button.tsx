import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  height: 44px;
  background-color: ${(props) => props.theme.colors.primary500};
  color: ${(props) => props.theme.colors.grey000};
  font-family: ${(props) => props.theme.fonts.secondary};
  border: none;
  font-size: ${(props) => props.theme.fontSizes[1]};
  padding: 0 ${(props) => props.theme.space.m};
  border-radius: 22px;
  cursor: pointer;
`;
