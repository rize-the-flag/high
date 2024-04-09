import { screen } from '@testing-library/react'
import componentRender from 'shared/config/tests/componentRender/componentRender'
import Navbar from 'widgets/Navbar/ui/Navbar'

describe('Navbar unit tests', () => {
  test('Navbar login test', () => {
    componentRender(<Navbar />, {
      initialState: {
        user: {
          authData: {
            userName: '1234',
            id: 12
          }
        }
      }
    })
    expect(screen.getByTestId('signOutBtn')).toBeInTheDocument()
  })
})
