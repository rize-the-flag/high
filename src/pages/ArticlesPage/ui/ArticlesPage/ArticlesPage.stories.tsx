import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'layer/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticlesPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
