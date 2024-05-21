import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type FC } from 'react'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView, skeletonNums: number = 3) => (
  <>
    {new Array(skeletonNums)
      .fill(0)
      .map((item, index) => (
        <ArticleListItemSkeleton
          className={cls.card}
          key={index}
          view={view}
        />
      ))}
  </>
)

const renderArticle = (article: Article, view: ArticleView) => {
  return (
    <ArticleListItem
      article={article}
      view={view}
    />
  )
}

const _ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props

  if (isLoading) {
    getSkeletons(view)
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.length > 0 && (
          articles.map(article => renderArticle(article, view))
        )
      }
      {isLoading && getSkeletons(view)}
    </div>
  )
}

export const ArticleList = memo(_ArticleList)
