import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export enum InputSizes {
  small = '2rem',
  medium = '3.5rem',
  large = '5rem',
}

interface StyledInputProps {
  height: InputSizes
}

const StyledInput = styled.input<StyledInputProps>`
  border: ${({theme}) => theme.border.medium};
  border-radius: ${({theme}) => theme.borderRadius.small};
  height: ${({ height }) => height};
  background-color: ${({theme}) => theme.background.secondary};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  transition: 0.2s ease;

  &:focus {
    transition: 0.2s ease;
    border-color: ${({theme}) => theme.palette.primary};
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: InputSizes,
}

const Input: FC<InputProps> = (props) => {
  const { height = InputSizes.medium } = props;
  return (
    <StyledInput
      {...props}
      height={height}
      placeholder={`${props.placeholder || ''}${props.required ? ' *' : ''}`}
    />
  );
};

export default Input;