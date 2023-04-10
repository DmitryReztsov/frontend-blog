import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export enum IconSize {
  small = 12,
  medium = 24,
  large = 48,
}

interface StyledIconProps {
  size?: IconSize | number,
}

const StyledIcon = styled.span<StyledIconProps>`
  width: ${(({size}) => `${size}px`)};
  height: ${(({size}) => `${size}px`)};
  
  & svg {
    width: ${(({size}) => `${size}px`)};
    height: ${(({size}) => `${size}px`)};
  }
`

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  component: React.ReactNode,
  size?: IconSize | number,
}

const Icon: FC<IconProps> = ({ component, size = IconSize.medium }) => {
  return (
    <StyledIcon size={size}>
      {component}
    </StyledIcon>
  );
};

export default Icon;