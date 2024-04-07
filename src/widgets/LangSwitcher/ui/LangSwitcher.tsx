import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import React, { memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

const _LangSwitcher = (props: LangSwitcherProps) => {
  const {
    className,
    short = false
  } = props

  const { t, i18n } = useTranslation()

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className ?? ''])}
      onClick={toggle}
      theme={ThemeButton.OUTLINE}
    >
      {t(short ? 'LanguageShort' : 'Language')}
    </Button>
  )
}

export const LangSwitcher = memo(_LangSwitcher)
