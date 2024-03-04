import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
      <Button onClick={onToggle}>{t('SideBarToggleButton')}</Button>
      <div className={classNames(cls.switchers)}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}
