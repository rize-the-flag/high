import { screen } from '@testing-library/react'
import componentRender from 'shared/config/tests/componentRender/componentRender'
import { Counter } from 'entities/Counter'
import { userEvent } from '@storybook/test'

describe('Counter unit tests', () => {
  test('Counter render test', () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: { value: 15 }
      }
    })
    expect(screen.getByTestId('counter')).toBeInTheDocument()
    expect(screen.getByTestId('value-title')).toHaveTextContent('15')
  })

  test('Counter decrement', async () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: { value: 15 }
      }
    })

    await userEvent.click(screen.getByTestId('decrementBtn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('14')
  })

  test('Counter increment', async () => {
    componentRender(<Counter/>, {
      initialState: {
        counter: { value: 15 }
      }
    })

    await userEvent.click(screen.getByTestId('incrementBtn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('16')
  })
})
