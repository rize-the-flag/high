import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber
} from 'pages/ArticlesPage/ui/ArticlesPage/model/selectors/articlesPageSelector'
import { fetchArticleList } from 'pages/ArticlesPage/ui/ArticlesPage/model/services/fetchArticlesList/fetchArticleList'
import { articlePageActions } from 'pages/ArticlesPage/ui/ArticlesPage/model/slices/articlePageSlice'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { extra, getState, dispatch } = thunkApi
    const hasMore = getArticlesHasMore(getState())
    const page = getArticlesPageNumber(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      void dispatch(fetchArticleList({
        page: page + 1
      }))
      void dispatch(articlePageActions.setPage(page + 1))
    }
  }
)
