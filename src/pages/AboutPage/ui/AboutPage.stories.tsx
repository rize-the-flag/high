import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ counter: { value: 0 } })
  ]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ counter: { value: 0 } })
  ]
}
