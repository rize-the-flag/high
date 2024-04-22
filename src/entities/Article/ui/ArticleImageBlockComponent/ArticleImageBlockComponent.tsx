import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { type FC } from 'react'

interface ArticleImageBlockComponentProps {
  className?: string
}

const _ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>

    </div>
  )
}

export const ArticleImageBlockComponent = memo(_ArticleImageBlockComponent)
