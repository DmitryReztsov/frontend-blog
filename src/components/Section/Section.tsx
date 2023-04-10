import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import SiteContainer from '@components/SiteContainer/SiteContainer';
import { Title1 } from '@style/components/title';

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 10rem;
`

interface SectionProps {
  title?: React.ReactNode,
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ children, title }) => {
  return (
    <StyledSection>
      <SiteContainer>
        {title && (
          <Title1>
            {title}
          </Title1>
        )}
        {children}
      </SiteContainer>
    </StyledSection>
  );
};

export default Section;