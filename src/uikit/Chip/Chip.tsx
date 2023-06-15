import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledChip = styled.span`
  display: inline-flex;
  gap: 0.5rem;
  border: ${({theme}) => theme.border.medium};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  padding: 0.25rem 0.75rem;
`

interface ChipProps {
  icon?: React.ReactNode,
}

const Chip: FC<PropsWithChildren<ChipProps>> = ({ children, icon }) => {
  return (
    <StyledChip>
      {children}
      {icon}
    </StyledChip>
  );
};

export default Chip;