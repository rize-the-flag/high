import React, { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { type StoryContext, type StoryFn } from '@storybook/react'
import Loader from 'shared/ui/Loader/Loader'

export const WithI18next = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals

  useEffect(() => {
    void i18n.changeLanguage(locale as string)
  }, [locale])

  return (
    <Suspense fallback={<Loader/>}>
      <I18nextProvider i18n={i18n}>
        <Story/>
      </I18nextProvider>
    </Suspense>
  )
}
