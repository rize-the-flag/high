import { createContext } from 'react'
import { type valueOf } from 'global'

export const Theme = {
  LIGHT: 'app_light_theme',
  DARK: 'app_dark_theme'
} as const

export type ThemeType = valueOf<typeof Theme>

export interface ThemeContextProps {
  theme: ThemeType
  setTheme?: (theme: ThemeType) => void
}
export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT
})
export const LOCAL_STORAGE_THEME_KEY = 'theme'
