import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
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
  const cachedThemeMode: ThemeMode | null = typeof sessionStorage !== 'undefined'
    ? sessionStorage.getItem('theme') as ThemeMode
    : null;

  const systemThemeMode = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: light)').matches ? ThemeMode.light : ThemeMode.dark;

  const [theme, setTheme] = useState((cachedThemeMode || systemThemeMode) === ThemeMode.light ? LightTheme: DarkTheme);

  const handleSetTheme = () => {
    const newTheme = theme.mode === ThemeMode.light ? DarkTheme : LightTheme;
    setTheme(newTheme)
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('theme', theme.mode === ThemeMode.light ?  ThemeMode.dark : ThemeMode.light)
    }
  }

  useEffect(() => {
    if (!cachedThemeMode) {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('theme', systemThemeMode ? ThemeMode.light : ThemeMode.dark)
      }
    }
  }, []);

  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader setTheme={handleSetTheme} />
          <Main>
            {children}
          </Main>
        <PageFooter />
      </ThemeProvider>
    </StyledLayout>
  );
};

export default BaseLayout;