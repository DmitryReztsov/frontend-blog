import styled from "styled-components";

export enum TextSize {
  tiny = '0.75rem',
  small = '0.875rem',
  medium = '1rem',
  large = '1.25rem',
}

interface TextProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700,
  size?: TextSize,
}

export const Text = styled.p<TextProps>`
  font-size: ${({ size = TextSize.medium }) => size};
  line-height: 1.5;
  font-weight: ${({ weight = 400 }) => weight};
  color: ${props => props.theme.text.secondary};
`