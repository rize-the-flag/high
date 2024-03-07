import { type StoryFn } from '@storybook/react'
import { type ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent/>
  </div>
)
