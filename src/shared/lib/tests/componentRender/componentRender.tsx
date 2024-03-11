import { type ReactNode } from 'react'
import i18n_forTest from 'shared/config/i18n/i18n_forTest'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

interface Options {
  route?: string
}

const ComponentRender = (Component: ReactNode, options: Options = {}) => {
  const { route } = options

  return render(
    <MemoryRouter initialEntries={[route ?? '/']}>
      <I18nextProvider i18n={i18n_forTest}>
        {Component}
      </I18nextProvider>
    </MemoryRouter>
  )
}

export default ComponentRender
