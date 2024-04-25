import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentsList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'

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
      <div className={classNames('', {}, [className])}>
        {t('ArticleNotFound')}
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id}/>
      <Text title={t('Comments')}/>
      <CommentsList
        isLoading={true}
        comments={[
          {
            id: '1',
            text: 'Text',
            user: {
              id: 1,
              userName: 'Vasya'
            }
          },
          {
            id: '2',
            text: 'Text',
            user: {
              id: 1,
              userName: 'Vasya'
            }
          }
        ]}
      />
    </div>
  )
}

export default memo(_ArticleDetailsPage)
