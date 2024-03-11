import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import React, { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  children?: React.ReactNode
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className ?? '', cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default AppLink
