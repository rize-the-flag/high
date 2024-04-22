import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent'

const meta = {
  title: 'layer/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleImageBlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
