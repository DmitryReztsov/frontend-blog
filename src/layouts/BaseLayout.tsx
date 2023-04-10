import React, { FC, PropsWithChildren, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from '@style/theme';
import PageHeader from '@components/PageHeader/PageHeader';
import { GlobalStyle } from '@style/global';
import PageFooter from '@components/PageFooter/PageFooter';
import { ThemeMode } from '@interfaces/styled';

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Main = styled.main`
  flex: 1 1 auto;
`

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const isLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;

  const [theme, setTheme] = useState(isLightTheme ? LightTheme : DarkTheme);

  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader setTheme={() => setTheme(theme.mode === ThemeMode.light ? DarkTheme : LightTheme)} />
          <Main>
            {children}
          </Main>
        <PageFooter />
      </ThemeProvider>
    </StyledLayout>
  );
};

export default BaseLayout;