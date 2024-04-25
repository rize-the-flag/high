import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'

const commentsAdapter = createEntityAdapter<Comment, Comment['id']>({
  selectId: (comment: Comment) => comment.id
})

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComment',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    ids: [],
    error: undefined,
    entities: {},
    isLoading: false
  }),
  reducers: {}
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsComment ?? commentsAdapter.getInitialState())
