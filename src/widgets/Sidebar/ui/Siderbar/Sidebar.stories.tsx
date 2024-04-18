import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({})
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
  ]
}
