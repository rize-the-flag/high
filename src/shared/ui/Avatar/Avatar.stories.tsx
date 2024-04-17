import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [
  ]
}
