import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { withTranslation } from 'react-i18next'

describe('Sidebar unit tests', () => {
  test('Sidebar doa utest', () => {
    const SideBar = withTranslation()(Sidebar)
    render(<SideBar />)
    screen.debug()
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    const SideBar = withTranslation()(Sidebar)
    render(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
