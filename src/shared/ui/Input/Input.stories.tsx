import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    placeholder: 'TEXT'
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const PrimaryDark: Story = {
  args: {
    placeholder: 'TEXT'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
