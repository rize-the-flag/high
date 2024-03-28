import {
  configureStore,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager, type StoreWithReducerManager } from 'shared/lib/reducerManager/createReducerManager'

export const createReduxStore = (initialState?: StateSchema): StoreWithReducerManager<StateSchema> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }) as StoreWithReducerManager<StateSchema>

  store.reducerManager = reducerManager

  return store
}
