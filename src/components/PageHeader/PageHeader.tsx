import React, { FC } from 'react';

import * as S from './styles'

import Link from '@uikit/Link/Link';
import SiteContainer from '@components/SiteContainer/SiteContainer';
import ThemeSwitcher from '@uikit/ThemeSwitcher/ThemeSwitcher';

const list = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

interface PageHeaderProps {
  setTheme: () => void,
}

const PageHeader: FC<PageHeaderProps> = ({ setTheme }) => {
  return (
    <S.PageHeader>
      <SiteContainer>
        <S.Container>
          <S.Logo to={'/'}>
            {'<frontzilla/>'}
          </S.Logo>
          <S.Menu>
            {list.map((elem) => {
              return <Link key={elem.title} to={elem.to}>{elem.title}</Link>
            })}
          </S.Menu>
          <S.Controls>
            <ThemeSwitcher setTheme={setTheme} />
          </S.Controls>
        </S.Container>
      </SiteContainer>
    </S.PageHeader>
  );
};

export default PageHeader;