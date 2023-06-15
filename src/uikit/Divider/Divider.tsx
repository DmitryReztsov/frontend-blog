import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.background.secondary};
`

const Divider: FC = () => <StyledDivider />;

export default Divider;