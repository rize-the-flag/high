import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import React from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const {
    className
  } = props

  const { t, i18n } = useTranslation()

  const toggle = async () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className ?? ''])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t('Language')}
    </Button>
  )
}
