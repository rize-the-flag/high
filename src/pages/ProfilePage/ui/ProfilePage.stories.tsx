import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type Profile } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

const data: Profile = {
  username: 'user@name',
  country: Country.Kazakhstan,
  age: 23,
  lastname: 'Ivanov',
  first: 'Ivan',
  currency: Currency.RUB,
  city: 'Astana'
}

export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        data
      }
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        data,
        form: data,
        readonly: true
      }
    })
  ]
}

export const Blue: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: data,
        readonly: true
      }
    })
  ]
}

export const Loading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.BLUE),
    StoreDecorator({
      profile: {
        isLoading: true
      }
    })
  ]
}
