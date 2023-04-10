import React from 'react';

import * as S from './styles'

import SiteContainer from '@components/SiteContainer/SiteContainer';
import { Text, TextSize } from '@style/components/text';
import socialList from '@components/PageFooter/social-list';
import Link from '@uikit/Link/Link';
import Icon from '@uikit/Icon/Icon';

const PageFooter = () => {
  return (
    <S.PageFooter>
      <SiteContainer>
        <S.Container>
          <S.Social>
            {socialList.map(({ logo: Ic, to }) => (
              <Link to={to} key={to}>
                <Icon
                  component={<Ic />}
                  size={20}
                />
              </Link>
            ))}
          </S.Social>
          <Text size={TextSize.small}>
            Copyright 2023 - © Dmitry Reztsov
          </Text>
        </S.Container>
      </SiteContainer>
    </S.PageFooter>
  );
};

export default PageFooter;