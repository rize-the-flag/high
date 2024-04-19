import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { type FC } from 'react'

interface ArticleDetailsPageProps {
  className?: string
}

const _ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {'ARTICLE DETAILS'}
    </div>
  )
}

export default memo(_ArticleDetailsPage)
