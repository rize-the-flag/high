import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import { type Profile } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/test/avatar.png'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

const data: Profile = {
  username: 'user@name',
  country: Country.Kazakhstan,
  age: 23,
  lastname: 'Ivanov',
  first: 'Ivan',
  currency: Currency.RUB,
  city: 'Birobidzhan',
  avatar
}

export const Light: Story = {
  args: {
    data
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT)
  ]
}

export const Dark: Story = {
  args: {
    data
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Blue: Story = {
  args: { data },
  decorators: [
    ThemeDecorator(Theme.BLUE)
  ]
}

export const Loading: Story = {
  args: { isLoading: true },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Editable: Story = {
  args: { data, readonly: false },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
