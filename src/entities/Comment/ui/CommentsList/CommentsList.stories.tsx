import type { Meta, StoryObj } from '@storybook/react'
import { CommentsList } from './CommentsList'

const meta = {
  title: 'layer/CommentsList',
  component: CommentsList,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CommentsList>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    comments: [{
      id: '1',
      text: 'Text',
      user: {
        id: 1,
        avatar: '',
        userName: 'UserName'
      }
    }]
  }
}
