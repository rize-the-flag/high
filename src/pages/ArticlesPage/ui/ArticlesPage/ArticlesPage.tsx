import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'

interface ArticlesPageProps {
  className?: string
}

const _ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames('', {}, [className])}>
      {'ARTICLES PAGE'}
    </div>
  )
}

export default _ArticlesPage
