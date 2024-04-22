import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useDynamicReducer } from 'shared/hooks/UseDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const _ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const {
    className,
    id
  } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  useDynamicReducer<StateSchema>('articleDetails', articleDetailsReducer)

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  // const data = useSelector(getArticleDetailsData)

  useEffect(() => {
    void dispatch(fetchArticleById(id))
  }, [dispatch, id])

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('ArticleLoadingError')}
      />
    )
  }

  if (isLoading) {
    return (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={240} />
        <Skeleton className={cls.skeleton} width={'100%'} height={240} />
        <Skeleton className={cls.skeleton} width={'100%'} height={240} />
      </>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      {'ARTICLE DETAILS'}
    </div>
  )
}

export const ArticleDetails = memo(_ArticleDetails)
