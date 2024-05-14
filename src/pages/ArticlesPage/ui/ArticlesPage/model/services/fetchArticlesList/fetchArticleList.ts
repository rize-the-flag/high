import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchArticleList = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const request = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
        }
      })
      return request.data
    } catch (e) {
      return rejectWithValue('Unable to fetch')
    }
  }
)
