import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentsList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { useDynamicReducer } from 'shared/hooks/UseDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments'

interface ArticleDetailsPageProps {
  className?: string
}

const _ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className
  } = props

  useDynamicReducer<StateSchema>('articleDetailsComment', articleDetailsReducer)

  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)

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
        isLoading={isCommentsLoading}
        comments={comments}
      />
    </div>
  )
}

export default memo(_ArticleDetailsPage)
