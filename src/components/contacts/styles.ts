import styled from "styled-components";

import Textarea from '@uikit/Textarea/Textarea';

export const ContactForm = styled.div`
`

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1.5rem;
`

export const StyledTextarea = styled(Textarea)`
  height: 250px;
`