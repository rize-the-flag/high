import React, { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from '../lib/ThemeContext'

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType ?? Theme.LIGHT

interface Props {
  children: React.ReactNode
  initialTheme?: ThemeType
}

const ThemeProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<ThemeType>(initialTheme ?? defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
