import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import React, { type ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...rest
  } = props

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className ?? '', cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  )
}
