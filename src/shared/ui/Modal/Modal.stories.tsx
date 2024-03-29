import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque commodi consectetur dolor dolorum ea',
    isOpen: true
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ModalDark: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque commodi consectetur dolor dolorum ea',
    isOpen: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
