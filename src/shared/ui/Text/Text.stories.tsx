import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextAlign, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const NormalLight: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ErrorLight: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Text',
    message: 'Text'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const NormalDark: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const ErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Text',
    message: 'Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const AlignCenter: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text',
    align: TextAlign.CENTER
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const AlignLeft: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text',
    align: TextAlign.LEFT
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const AlignRight: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text',
    align: TextAlign.RIGHT
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const SizeL: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text',
    align: TextAlign.CENTER,
    size: TextSize.L
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const SizeM: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Text',
    message: 'Text',
    align: TextAlign.CENTER,
    size: TextSize.M
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
