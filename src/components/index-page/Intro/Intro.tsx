import React from 'react';

import * as S from './styles';

import { Text } from '@style/components/text';
import { Title1 } from '@style/components/title';
import Section from '@components/Section/Section';

const Intro = () => {
  const title = (
    <>
      Frontend engineer, <br/>
      UI/UX designer, <br/>
      blog author
    </>
  )
  return (
    <S.Intro>
      <Section
        title={title}
      >
        <S.TextContainer>
          <Text>
            Hi! My name is Dmitry, I'm frontend developer. <br/>
            I'm very glad to see you on Frontzilla, my personal website.
          </Text>
          <Text>
            On Frontzilla I am sharing my knowledge with my auditory: <br/>
            tell about trending tools in frontend, explain how different technologies work,
            share some interesting tips and more!
          </Text>
        </S.TextContainer>
      </Section>
    </S.Intro>
  );
};

export default Intro;