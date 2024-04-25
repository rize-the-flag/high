import type { Meta, StoryObj } from '@storybook/react'
import { CommentItem } from './CommentItem'

const meta = {
  title: 'layer/CommentItem',
  component: CommentItem,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CommentItem>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
