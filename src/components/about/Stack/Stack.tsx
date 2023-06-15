import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import Section from '@components/Section/Section';
import Group from '@components/about/Stack/Group/Group';
import Icon from '@uikit/Icon/Icon';
import { ThemeMode } from '@interfaces/styled';
import frontendIcons from './frontendIcons';
import backendIcons from './backendIcons';
import toolsIcons from './toolsIcons';

const Stack = () => {
  const theme = useTheme()
  const isLightTheme = theme.mode == ThemeMode.light;

  return (
    <S.Stack>
      <Section title={'Technology stack'}>
        <S.Grid>
          <Group title={'Frontend'}>
            {frontendIcons.map(({ logo: Logo, darkThemeLogo: DarkLogo, alt }) => (
              <Icon
                key={alt}
                component={!isLightTheme && DarkLogo ? <DarkLogo /> : <Logo />}
                size={48}
              />
            ))}
          </Group>
          <Group title={'Backend'}>
            {backendIcons.map(({ logo: Logo, darkThemeLogo: DarkLogo, alt }) => (
              <Icon
                key={alt}
                component={!isLightTheme && DarkLogo ? <DarkLogo /> : <Logo />}
                size={48}
              />
            ))}
          </Group>
          <Group title={'Tools'}>
            {toolsIcons.map(({ logo: Logo, darkThemeLogo: DarkLogo, alt }) => (
              <Icon
                key={alt}
                component={!isLightTheme && DarkLogo ? <DarkLogo /> : <Logo />}
                size={48}
              />
            ))}
          </Group>
        </S.Grid>
      </Section>
    </S.Stack>

  );
};

export default Stack;