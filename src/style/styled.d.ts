import 'styled-components';

import { ITheme, ThemeMode } from '@interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    mode: ThemeMode,
  }
}