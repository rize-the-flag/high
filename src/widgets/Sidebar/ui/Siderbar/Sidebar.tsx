import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import AppLink from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/route-config/route-config'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

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
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        square={true}
        size={ButtonSize.L}
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>

        <AppLink to={RoutePath.main} className={cls.item}>
          <MainIcon className={cls.icon}/>
          <span className={cls.link}>
              {t('MenuLinkMain')}
            </span>
        </AppLink>

        <AppLink to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon}/>
          <span className={cls.link}>
              {t('MenuLinkAbout')}
            </span>
        </AppLink>

      </div>
      <div className={classNames(cls.switchers)}>
        <LangSwitcher
          short={collapsed}
        />
        <ThemeSwitcher/>
      </div>
    </div>
  )
}

export default Sidebar
