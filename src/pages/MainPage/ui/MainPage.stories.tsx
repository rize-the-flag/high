import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
