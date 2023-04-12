import React, { FC } from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import styled, { useTheme } from 'styled-components';
import { darcula as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight as light } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ThemeMode } from '@interfaces/styled';

interface StyledSyntaxHighlighterProps {
}

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)<StyledSyntaxHighlighterProps>`
`

interface CodeProps extends SyntaxHighlighterProps {
}

const Code: FC<CodeProps> = ({ children, language = 'javascript', style }) => {
  const theme = useTheme();
  const isLightTheme = theme.mode === ThemeMode.light

  return (
    <StyledSyntaxHighlighter
      language={language}
      style={style || isLightTheme ? light : dark}
      customStyle={{
        background: theme.background.code,
        marginTop: '1rem',
        borderRadius: theme.borderRadius.small,
      }}
      codeTagProps={{ style: { background: theme.background.code } }}
    >
      {children}
    </StyledSyntaxHighlighter>
  );
};

export default Code;