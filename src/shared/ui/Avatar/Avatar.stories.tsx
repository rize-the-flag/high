import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import avatar from '../../assets/test/avatar.png'

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
  args: {
    src: avatar
  },
  decorators: [
  ]
}
