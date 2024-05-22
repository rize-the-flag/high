import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticleList } from '../fetchArticlesList/fetchArticleList'
import { getArticlePageHasInited } from '../../selectors/articlesPageSelector'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi
    const _hasInited = getArticlePageHasInited(getState())

    if (!_hasInited) {
      dispatch(articlePageActions.init())
      void dispatch(fetchArticleList({ page: 1 }))
    }
  }
)
