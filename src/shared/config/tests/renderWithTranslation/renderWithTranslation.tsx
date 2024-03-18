import React from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n_forTest from 'shared/config/i18n/i18n_forTest'

export const renderWithTranslation = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n_forTest}>
      {component}
    </I18nextProvider>
  )
}
