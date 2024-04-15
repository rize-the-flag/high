import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { type CSSProperties, type FC } from 'react'

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  message?: string
  theme?: TextTheme
  style?: CSSProperties
  align?: TextAlign
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    message,
    title,
    theme = TextTheme.PRIMARY,
    style,
    align = TextAlign.LEFT
  } = props

  return (
    <div style={style} className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {message && <p className={cls.message}>{message}</p>}
    </div>
  )
}
