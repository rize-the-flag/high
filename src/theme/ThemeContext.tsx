import {createContext} from "react";
import {valueOf} from "global";

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type ThemeType = valueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemeType,
  setTheme?: (theme: ThemeType) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
