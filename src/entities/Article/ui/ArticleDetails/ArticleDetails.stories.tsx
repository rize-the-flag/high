import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'

const meta = {
  title: 'layer/ArticleDetails',
  component: ArticleDetails,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    id: '1'
  }
}
