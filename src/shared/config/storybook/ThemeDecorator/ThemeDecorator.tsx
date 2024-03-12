import { type StoryFn } from '@storybook/react'
import { type ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeProvider } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent/>
    </div>
  </ThemeProvider>
)

export default ThemeDecorator
