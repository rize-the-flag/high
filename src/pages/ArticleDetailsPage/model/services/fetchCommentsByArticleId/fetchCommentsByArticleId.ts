import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!articleId) {
      return rejectWithValue('ArticleNotFound')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      return response.data
    } catch (e) {
      return rejectWithValue('ArticleFetchingError')
    }
  }
)
