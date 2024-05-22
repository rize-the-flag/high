import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentsList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useSelector } from 'react-redux'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/AddNewComment'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'shared/ui/Page/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const _ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className
  } = props

  useDynamicReducer<StateSchema>({
    slice: 'articleDetailsComments',
    reducer: articleDetailsCommentsReducer
  })

  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  }, [id])

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        {t('ArticleNotFound')}
      </div>
    )
  }

  return (
    <Page className={classNames(className ?? '')}>
      <ArticleDetails id={id}/>
      <Text title={t('Comments')}/>
      <AddCommentForm
        onSendComment={onSendComment}
      />
      <CommentsList
        isLoading={isCommentsLoading}
        comments={comments}
      />
    </Page>
  )
}

export default memo(_ArticleDetailsPage)
