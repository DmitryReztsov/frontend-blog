import React from 'react';

import * as S from './styles';

import Section from '@components/Section/Section';
import Input from '@uikit/Input/Input';
import Button from '@uikit/Button/Button';

const ContactForm = () => {
  return (
    <S.ContactForm>
      <Section title={'Contact me'}>
        <S.Form>
          <S.InputContainer>
            <Input
              type='text'
              placeholder='First name'
              name='First name'
              required
            />
            <Input
              type='text'
              placeholder='Last name'
              name='last name'
              required
            />
            <Input
              type='email'
              placeholder='Email'
              name='email'
              required
            />
            <Input
              type='tel'
              placeholder='Phone'
              name='phone'
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </S.InputContainer>
          <S.StyledTextarea
            placeholder='Message'
            name='message'
            required
          />
          <Button type='submit'>
            Send
          </Button>
        </S.Form>
      </Section>
    </S.ContactForm>

  );
};

export default ContactForm;