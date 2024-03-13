import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  return (
    <div>
      {t('MainPage')}
      <Input
        placeholder='Name'
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
    </div>
  )
}

export default MainPage
