import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.BIG

export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page
export const getArticlesPerPageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore
