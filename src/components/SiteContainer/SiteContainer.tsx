import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledSiteContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;

  @media(${({ theme }) => theme.media.large}) {
    padding: 0 32px;
  }
`

const SiteContainer: FC<PropsWithChildren> = ( { children }) => {
  return (
    <StyledSiteContainer>
      {children}
    </StyledSiteContainer>
  );
};

export default SiteContainer;