import React, { FC } from 'react';
import styled from 'styled-components';

export const Root = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: cover;
`

interface AvatarProps {
  src: string,
  alt?: string,
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Root src={src} alt="picture" />
  );
};

export default Avatar;