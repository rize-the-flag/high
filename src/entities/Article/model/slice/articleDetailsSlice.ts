import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/article'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
