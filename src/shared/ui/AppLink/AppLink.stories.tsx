import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    to: '#'
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    to: '#'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const SecondaryLight: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
    to: '#'
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
    to: '#'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
