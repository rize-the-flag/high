import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDARK: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
