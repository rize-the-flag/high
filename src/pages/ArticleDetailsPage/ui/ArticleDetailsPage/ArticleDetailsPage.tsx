import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { type FC } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string
}

const _ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className
  } = props

  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('ArticleNotFound')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id}/>
    </div>
  )
}

export default memo(_ArticleDetailsPage)
