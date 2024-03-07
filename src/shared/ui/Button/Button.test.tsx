import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button test', () => {
  test('Button render test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('Button theme clear test', () => {
    render(<Button theme={ThemeButton.OUTLINE}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.CLEAR)
  })
})
