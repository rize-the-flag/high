import { type ReactNode } from 'react'
import i18n_forTest from 'shared/config/i18n/i18n_forTest'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'

interface Options {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

const ComponentRender = (Component: ReactNode, options: Options = {}) => {
  const { route, initialState } = options

  render(
    <MemoryRouter initialEntries={[route ?? '/']}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18n_forTest}>
          {Component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export default ComponentRender
