import React, { FC, PropsWithChildren } from 'react';

import * as S from './styles';

import { Title3 } from '@style/components/title';


interface GroupProps {
  title: string,
}

const Group: FC<PropsWithChildren<GroupProps>> = ({ children, title }) => {
  return (
    <S.Group>
      <S.Name>
        <Title3>
          {title}
        </Title3>
      </S.Name>
      <S.Technologies>
        {children}
      </S.Technologies>
    </S.Group>
  );
};

export default Group;