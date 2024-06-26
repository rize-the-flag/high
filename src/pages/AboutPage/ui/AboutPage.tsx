import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'
import { Page } from 'shared/ui/Page/Page'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
    <Page>
      {t('AboutPage')}
      <Counter/>
    </Page>
  )
}

export default AboutPage
