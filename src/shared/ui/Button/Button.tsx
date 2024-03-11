import { type ButtonHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  OUTLINE = 'outline',
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

export default Button
