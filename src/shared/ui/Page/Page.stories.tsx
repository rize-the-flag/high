import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'

const meta = {
  title: 'layer/Page',
  component: Page,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: <div>page</div>
  }
}
