import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({})
  ]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
  ]
}

export const Loading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { isLoading: true } })
  ]
}

export const WithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: {
        error: 'Password or login incorrect'
      }
    })
  ]
}
