import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    className: 'class name'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
  args: {
    className: 'class name'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
