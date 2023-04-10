import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  border: ${({theme}) => theme.border.medium};
  border-radius: ${({theme}) => theme.borderRadius.small};
  background-color: ${({theme}) => theme.background.secondary};
  padding: 1rem;
  transition: 0.2s ease;

  &:focus {
    transition: 0.2s ease;
    border-color: ${({theme}) => theme.palette.primary};
  }
`

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
}

const Textarea: FC<TextareaProps> = (props) => {
  return (
    <StyledTextarea
      {...props}
      placeholder={`${props.placeholder || ''}${props.required ? ' *' : ''}`}
    />
  );
};

export default Textarea;