import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export enum ButtonSizes {
  small = '2rem',
  medium = '3.5rem',
  large = '5rem',
}

interface StyledButtonProps {
  height: ButtonSizes
}


const StyledButton = styled.button<StyledButtonProps>`
  border: ${({theme}) => theme.border.medium};
  border-radius: ${({theme}) => theme.borderRadius.small};
  height: ${({ height }) => height};
  background-color: ${({theme}) => theme.background.secondary};
  padding: 0 1rem;
  transition: 0.2s linear;
  cursor: pointer;
  
  &:hover {
    transition: 0.2s linear;
    color: ${props => props.theme.palette.primary};
    border-color: ${props => props.theme.palette.primary};
  }
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: ButtonSizes
}

const Button: FC<ButtonProps> = (props) => {
  const { height = ButtonSizes.medium } = props;

  return (
    <StyledButton {...props} height={height} />
  );
};

export default Button;