import { ITheme, ThemeMode } from '@interfaces/styled';
import { DefaultTheme } from 'styled-components';

export const BaseTheme: ITheme  = {
  palette: {
    primary: 'hsl(210,100%,40%)',
  },
  background: {
    primary: 'hsl(0,0%,100%)',
    secondary: 'hsl(0,0%,90%)',
  },
  text: {
    primary: 'hsl(240,6%,10%)',
    secondary: 'hsl(240,6%,20%)',
  },
  border: {
    medium: '1px solid hsla(240,6%,20%,0.2)'
  },
  borderRadius: {
    large: '2rem',
    medium: '1rem',
    small: '0.5rem',
  },
  media: {
    extraLarge: '(max-width: 1440px)',
    large: '(max-width: 1024px)',
    medium: '(max-width: 768px)',
    small: '(max-width: 540px)',
  }
}

export const LightTheme: DefaultTheme = {
  ...BaseTheme,
  mode: ThemeMode.light,
  palette: {
    ...BaseTheme.palette,
    primary: 'hsl(210,100%,40%)',
  },
  background: {
    ...BaseTheme.background,
    primary: 'hsl(0,0%,100%)',
    secondary: 'hsl(0,0%,97%)',
  },
  text: {
    ...BaseTheme.text,
    primary: 'hsl(240,6%,10%)',
    secondary: 'hsl(240,6%,20%)',
  },
  border: {
    ...BaseTheme.border,
    medium: '1px solid hsla(240,6%,20%,0.2)'
  },
}

export const DarkTheme: DefaultTheme = {
  ...BaseTheme,
  mode: ThemeMode.dark,
  palette: {
    ...BaseTheme.palette,
    primary: 'hsl(210,100%,40%)',
  },
  background: {
    ...BaseTheme.background,
    primary: 'hsl(240,6%,10%)',
    secondary: 'hsl(240,6%,12%)',
  },
  text: {
    ...BaseTheme.text,
    primary: 'hsl(0,0%,95%)',
    secondary: 'hsl(0,0%,80%)',
  },
  border: {
    ...BaseTheme.border,
    medium: '1px solid hsla(0,0%,80%,0.2)'
  },
}

