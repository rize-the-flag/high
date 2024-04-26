import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'

const meta = {
  title: 'layer/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AddCommentForm>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
