import { type HTMLAttributes, memo, type ReactNode, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

const _Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    ...rest
  } = props

  return (
    <div className={classNames(cls.Card, {}, [className])} {...rest}>
      {children}
    </div>
  )
}

export const Card = memo(_Card)
