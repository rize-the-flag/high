import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import { Page } from 'shared/ui/Page/Page'

const MainPage = () => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  return (
    <Page>
      {t('MainPage')}
      <Input
        placeholder='Name'
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
    </Page>
  )
}

export default MainPage
