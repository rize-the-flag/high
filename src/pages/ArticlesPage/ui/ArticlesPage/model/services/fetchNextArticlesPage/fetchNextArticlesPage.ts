import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber
} from '../../selectors/articlesPageSelector'
import { fetchArticleList } from '../fetchArticlesList/fetchArticleList'
import { articlePageActions } from '../../slices/articlePageSlice'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
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
