import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { DarkTheme, LightTheme } from '@style/theme';
import PageHeader from '@components/PageHeader/PageHeader';
import { GlobalStyle } from '@style/global';
import PageFooter from '@components/PageFooter/PageFooter';
import { ThemeMode } from '@interfaces/styled';

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled(motion.main)`
  flex: 1 1 auto;
`;

const isBrowser = typeof window !== "undefined";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const savedTheme = !isBrowser
    ? null
    : localStorage.getItem('theme') === ThemeMode.light
      ? LightTheme
      : DarkTheme;

  const [theme, setTheme] = useState(savedTheme ? savedTheme :
  !isBrowser ? LightTheme : window
    .matchMedia('(prefers-color-scheme: light)')
    .matches
      ? LightTheme
      : DarkTheme);

  const handleSetTheme = () => {
    const newTheme = theme.mode === ThemeMode.light ? DarkTheme : LightTheme;
    setTheme(newTheme);
  };

  useEffect(() => {
    if (savedTheme) return;
    if (!isBrowser) return;
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', ({ matches: isLight }) => {
        setTheme(isLight ? LightTheme: DarkTheme);
      });
    console.log('init')

  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem('theme', theme.mode)
  }, [theme]);

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
          <PageHeader setTheme={handleSetTheme} />
            <Main
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{
                type: 'spring',
                mass: 0.35,
                stiffness: 75,
                duration: 0.3
              }}
            >
              {children}
            </Main>
          <PageFooter />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default BaseLayout;
