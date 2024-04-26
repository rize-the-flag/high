import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment, Comment['id']>({
  selectId: (comment: Comment) => comment.id
})

const initialState = commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
  isLoading: false,
  error: undefined,
  entities: {},
  ids: []
})

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false
      commentsAdapter.setAll(state, action.payload)
    })

    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments ?? commentsAdapter.getInitialState()
)
