import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: ThemeType
}

const THEMES = {
  [Theme.DARK]: Theme.BLUE,
  [Theme.LIGHT]: Theme.DARK,
  [Theme.BLUE]: Theme.LIGHT
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    if (setTheme != null) {
      const newTheme = THEMES[theme]
      setTheme(newTheme)
      document.body.className = newTheme
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
  }

  return {
    theme,
    toggleTheme
  }
}
