import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`)
      return response.data
    } catch (e) {
      return rejectWithValue(i18n.t('FetchingArticleError'))
    }
  }
)
