import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';

import PageHeader from '../components/PageHeader/PageHeader';
import { LightTheme, DarkTheme } from "../style/theme";
import { GlobalStyle } from "../style/global";
import PageFooter from '../components/PageFooter/PageFooter';

const Main = styled.main`
  flex: 1 1 auto;
`

const IndexPage: React.FC<PageProps> = () => {
  const isLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <PageHeader />
        <Main>
        </Main>
        <PageFooter />
      </ThemeProvider>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Frontzilla - Home Page</title>
