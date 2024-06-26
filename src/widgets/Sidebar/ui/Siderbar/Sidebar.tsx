import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import { getSideBarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems'
import { useSelector } from 'react-redux'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sideBarItems = useSelector(getSideBarItems)
  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <menu
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
        {sideBarItems.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={classNames(cls.switchers)}>
        <LangSwitcher
          short={collapsed}
        />
        <ThemeSwitcher/>
      </div>
    </menu>
  )
}

export default Sidebar
