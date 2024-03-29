import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const OutlineLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const InvertedBackground: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const SquareSmall: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const SquareLarge: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const SquareExtraLarge: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const OutlineM: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.M
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const OutlineL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}
