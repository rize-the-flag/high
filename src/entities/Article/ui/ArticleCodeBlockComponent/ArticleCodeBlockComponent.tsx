import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { type FC } from 'react'

interface ArticleCodeBlockComponentProps {
  className?: string
}

const _ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>

    </div>
  )
}

export const ArticleCodeBlockComponent = memo(_ArticleCodeBlockComponent)
