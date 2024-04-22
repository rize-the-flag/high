import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { type FC } from 'react'

interface ArticleTextBlockComponentProps {
  className?: string
}

const _ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>

    </div>
  )
}

export const ArticleTextBlockComponent = memo(_ArticleTextBlockComponent)
