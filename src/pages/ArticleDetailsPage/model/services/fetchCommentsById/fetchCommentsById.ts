import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type ThunkConfig } from 'app/providers/StoreProvider'

const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Comment[]>(`/comments/${articleId}`, {
        params: {
          articleId,
          _expand: 'user'
        }
      })
      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)
