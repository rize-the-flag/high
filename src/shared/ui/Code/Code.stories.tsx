import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: ''
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>'
  },
  decorators: [
    ThemeDecorator(Theme.BLUE)
  ]
}
