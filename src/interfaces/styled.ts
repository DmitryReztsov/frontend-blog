export enum ThemeMode  {
  light = "light",
  dark = "dark"
}

export interface ITheme {
  palette: {
    primary: string,
  },
  background: {
    primary: string,
    secondary: string,
    code: string,
  },
  text: {
    primary: string,
    secondary: string,
  },
  border: {
    medium: string,
  },
  borderRadius: {
    large: string,
    medium: string,
    small: string,
  }
  media: {
    extraLarge: string,
    large: string,
    medium: string,
    small: string,
  }
}