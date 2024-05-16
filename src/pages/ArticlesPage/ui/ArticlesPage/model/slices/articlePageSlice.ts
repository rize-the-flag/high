import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article, ArticleView } from 'entities/Article'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticleList } from '../services/fetchArticlesList/fetchArticleList'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

const articleAdapter = createEntityAdapter<Article, Article['id']>({
  selectId: (article) => article.id
})

const initialState = articleAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  error: undefined,
  hasMore: true,
  limit: 1,
  page: 1,
  ids: [],
  entities: {},
  view: ArticleView.SMALL
})

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState,

  reducers: {

    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
    },

    init: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 3 : 4
    },

    setPage: (state, action: PayloadAction<ArticlesPageSchema['page']>) => {
      state.page = action.payload
    },

    setPerPageLimit: (state, action: PayloadAction<ArticlesPageSchema['limit']>) => {
      state.limit = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isLoading = false
      state.hasMore = action.payload.length > 0
      articleAdapter.addMany(state, action.payload)
    })

    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const {
  reducer: articlePageReducer,
  actions: articlePageActions
} = articlePageSlice

export const getArticles = articleAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articleAdapter.getInitialState()
)
