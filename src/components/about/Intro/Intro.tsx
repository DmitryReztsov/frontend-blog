import React from 'react';

import * as S from './styles';

import Section from '@components/Section/Section';
import { Text } from '@style/components/text';

const Intro = () => {
  return (
    <S.Intro>
      <Section title={'About me'}>
        <S.Bio>
          <Text>
            I'm Dmitry Reztsov, a frontend developer who creates a modern web application
            with significant logic and user-friendly interfaces.
            I have experience working with projects of various sizes and difficulty.
          </Text>
          <Text>
            Firstly, I have a lot of experience in frontend development, mostly in React stack
            - Typescript, Redux, React Router, NextJs, StyledComponents and etc.
            But I also practice in other frameworks like Vue and Angular.
          </Text>
          <Text>
            My particular love is backend and design. I worked in NodeJs projects based on Express and NestJs,
            using SQL and noSQL databases. <br/>
            In Figma I create prototypes and design systems which help to see the final result of projects and
            standardize code style.
          </Text>
          <Text>
            <b>My life motto - learn everyday.</b> That's why I created a Frontzilla.
          </Text>
        </S.Bio>
      </Section>
    </S.Intro>

  );
};

export default Intro;