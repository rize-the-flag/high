import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <div>
      <Counter/>
      {t('MainPage')}
    </div>
  )
}

export default MainPage
