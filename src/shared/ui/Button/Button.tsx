import { type ButtonHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_M',
  L = 'size_L',
  XL = 'size_XL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

const _Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    square = false,
    size = ButtonSize.M,
    ...rest
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square
  }

  const classes = [
    className ?? '',
    cls[theme],
    cls[size]
  ]

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, classes)}
      {...rest}
    >
      {children}
    </button>
  )
}

export const Button = memo(_Button)
