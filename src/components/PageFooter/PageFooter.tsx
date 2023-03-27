import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: ${props => props.theme.background.primary};
  color: ${props => props.theme.text.primary};
  display: flex;
  justify-content: center;
`


const PageFooter = () => {
  return (
    <Container>
      {'(c) Dmitry Reztsov'}
    </Container>
  );
};

export default PageFooter;