import React from 'react';

import * as S from './styles';
import Section from '@components/Section/Section';
import { Title3 } from '@style/components/title';
import { Text } from '@style/components/text';
import Chip from '@uikit/Chip/Chip';
import tags from '@components/index-page/Technologies/tags';
import icons from '@components/index-page/Technologies/icons';
import Icon from '@uikit/Icon/Icon';

const Technologies = () => {
  return (
    <S.Technologies>
      <Section title={'Technologies'}>
        <S.Content>
          <S.Description>
            <Text>
              Frontzilla is website about frontend development first of all.
              I am providing information about trending technologies in frontend world,
              but I also love a backend development and UI/UX design, and it will find place here too!
            </Text>
            <Title3>
              Actual tags
            </Title3>
            <S.Tags>
              {tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </S.Tags>
          </S.Description>
          <S.Picture>
            {icons.map((Ic, i) => <Icon key={i} component={<Ic />} size={i === 0 ? 136 : 72} />)}
          </S.Picture>
        </S.Content>
      </Section>
    </S.Technologies>
  );
};

export default Technologies;