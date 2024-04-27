import cls from './SidebarItem.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getAuthData } from 'entities/User'
import { type SidebarItemType } from 'widgets/Sidebar/model/types/sideBar'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const _SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  const mods = {
    [cls.collapsed]: collapsed
  }

  return (
    <AppLink to={item.path} className={classNames(cls.item, mods)}>
      <item.Icon className={cls.icon}/>
      <span
        className={cls.link}
      >
        {t(item.text)}
      </span>
    </AppLink>
  )
}

export const SidebarItem = memo(_SidebarItem)
