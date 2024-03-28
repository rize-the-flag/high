import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'

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

const loginForm: StateSchema['loginForm'] = {
  error: undefined,
  password: '1234',
  isLoading: false,
  userName: 'aaaa'
}

export const PrimaryLight: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ loginForm })
  ]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm })
  ]
}

export const Loading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { ...loginForm, isLoading: true } })
  ]
}

export const WithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ loginForm: { ...loginForm, error: 'some error occurred' } })
  ]
}
