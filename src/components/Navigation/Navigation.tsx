import React, { FC } from 'react';

import * as S from './styles'

interface NavigationProps {
  list: string []
}

const Navigation: FC<NavigationProps> = ({ list }) => {
  return (
    <S.Nav>
      {list.map((link) => (
        <S.NavLink
          activeClass={'active'}
          to={link}
          key={link}
          spy={true}
          duration={750}
        >
          <S.Tip>
            {link}
          </S.Tip>
          <S.Dot />
        </S.NavLink>
      ))}
    </S.Nav>
  );
};

export default Navigation;