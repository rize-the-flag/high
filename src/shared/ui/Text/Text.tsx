import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { type CSSProperties, type FC } from 'react'

interface TextProps {
  className?: string
  title?: string
  message?: string
  theme?: TextTheme
  style?: CSSProperties
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    message,
    title,
    theme = TextTheme.PRIMARY,
    style
  } = props

  return (
    <div style={style} className={classNames(cls.text, {}, [className ?? '', cls[theme]])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {message && <p className={cls.message}>{message}</p>}
    </div>
  )
}
