import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { type FC } from 'react'

interface ArticlesPageProps {
  className?: string
}

const _ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {'ARTICLES PAGE'}
    </div>
  )
}

export default _ArticlesPage
