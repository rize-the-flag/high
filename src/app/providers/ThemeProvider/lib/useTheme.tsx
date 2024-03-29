import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: ThemeType
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    if (setTheme != null) {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
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
