import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent'

const meta = {
  title: 'layer/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleCodeBlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
