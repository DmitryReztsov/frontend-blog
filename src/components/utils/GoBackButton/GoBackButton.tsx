import React, { FC } from 'react';
import styled from 'styled-components';

import Link, { LinkProps } from '@uikit/Link/Link';

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'

const StyledGoBackButton = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

interface GoBackButtonProps extends LinkProps {
}

const GoBackButton: FC<GoBackButtonProps> = ({ children, to }) => {
  return (
    <StyledGoBackButton to={to}>
      <ArrowLeft size={20} />
      {children || 'Back'}
    </StyledGoBackButton>
  );
};

export default GoBackButton;