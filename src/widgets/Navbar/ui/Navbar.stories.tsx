import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
