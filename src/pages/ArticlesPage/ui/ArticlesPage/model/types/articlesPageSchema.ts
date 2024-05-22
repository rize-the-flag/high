import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article, Article['id']> {
  isLoading?: boolean
  error?: string
  _has_inited: boolean

  view: ArticleView
  page: number
  limit: number
  hasMore: boolean
}
