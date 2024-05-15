import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPerPageLimit } from '../../selectors/articlesPageSelector'

export interface FetchArticleListArgs {
  page?: number
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListArgs, ThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const { page = 1 } = args
    const limit = getArticlesPerPageLimit(getState())

    try {
      const request = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
        }
      })
      return request.data
    } catch (e) {
      return rejectWithValue('Unable to fetch')
    }
  }
)
