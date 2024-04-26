import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import Avatar from 'shared/ui/Avatar/Avatar'
import CalendarIcon from 'shared/assets/icons/date-20-20.svg'
import EyeIcon from 'shared/assets/icons/views-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { type ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent block={block} className={cls.block}/>
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent block={block} className={cls.block}/>
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent block={block} className={cls.block}/>
  }
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
  const article = useSelector(getArticleDetailsData)

  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      void dispatch(fetchArticleById(id))
    }
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
        <Skeleton className={cls.title} width={300} height={32}/>
        <Skeleton className={cls.skeleton} width={600} height={240}/>
        <Skeleton className={cls.skeleton} width={'100%'} height={240}/>
        <Skeleton className={cls.skeleton} width={'100%'} height={240}/>
      </>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      <div className={cls.avatarWrapper}>
        <Avatar
          size={200}
          src={article?.img}
          className={cls.avatar}
        />
      </div>
      <Text
        className={cls.title}
        title={article?.title}
        message={article?.subtitle}
        size={TextSize.L}
      />
      <div className={cls.articleInfo}>
        <Icon Svg={EyeIcon} className={cls.icon}/>
        <Text message={String(article?.views)}/>
      </div>
      <div className={cls.articleInfo}>
        <Icon Svg={CalendarIcon} className={cls.icon}/>
        <Text message={String(article?.createdAt)}/>
      </div>
      {article?.blocks.map(renderBlock)}
    </div>
  )
}

export const ArticleDetails = memo(_ArticleDetails)
