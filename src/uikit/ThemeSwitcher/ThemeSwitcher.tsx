import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { Moon, Sun } from 'styled-icons/bootstrap';

import IconStyleWrapper from '@uikit/IconStyleWrapper/IconStyleWrapper';

const Root = styled.div`
  width: 32px;
  height: 32px;
  border: ${({ theme }) => theme.border.medium};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;

  &:hover {
    border-color: ${props => props.theme.palette.primary};
    
    svg {
      path {
        transition: 0.2s linear;
        fill: ${props => props.theme.palette.primary};
      }
    }
  }
`

interface ThemeSwitcherProps {
  setTheme: () => void,
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ setTheme }) => {
  const { mode } = useTheme();
  return (
    <Root onClick={setTheme}>
      <IconStyleWrapper>
        {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </IconStyleWrapper>
    </Root>
  );
};

export default ThemeSwitcher;