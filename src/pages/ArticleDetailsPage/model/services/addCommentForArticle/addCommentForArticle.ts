import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { type Comment } from 'entities/Comment'
import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'addCommentForArticle',
  async (text, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi

    const authData = getAuthData(getState())
    const article = getArticleDetailsData(getState())

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: authData?.id,
        text
      })
      void dispatch(fetchCommentsByArticleId(article?.id))
      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)
