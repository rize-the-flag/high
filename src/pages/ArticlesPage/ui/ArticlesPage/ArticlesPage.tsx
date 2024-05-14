import { classNames } from 'shared/lib/classNames/classNames'
import { type FC, useCallback } from 'react'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { articlePageActions, articlePageReducer, getArticles } from './model/slices/articlePageSlice'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleList } from './model/services/fetchArticlesList/fetchArticleList'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from './model/selectors/articlesPageSelector'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

interface ArticlesPageProps {
  className?: string
}

const _ArticlesPage: FC<ArticlesPageProps> = (props) => {
  useDynamicReducer<StateSchema>('articlesPage', articlePageReducer)

  const {
    className
  } = props

  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const isError = useSelector(getArticlesPageError)

  useInitialEffect(() => {
    void dispatch(fetchArticleList())
    dispatch(articlePageActions.init())
  }, [])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
    localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, view)
  }, [dispatch])

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleViewSelector view={view} onViewClick={onChangeView}/>
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </div>
  )
}

export default _ArticlesPage
