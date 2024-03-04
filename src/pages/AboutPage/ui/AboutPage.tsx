import React from 'react'
import { useTranslation } from 'react-i18next'
import Counter from 'components/Counter'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
    <div>
      {t('AboutPage')}
      <Counter/>
    </div>
  )
}

export default AboutPage
