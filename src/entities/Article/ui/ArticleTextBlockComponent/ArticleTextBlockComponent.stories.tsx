import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

const meta = {
  title: 'layer/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleTextBlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
