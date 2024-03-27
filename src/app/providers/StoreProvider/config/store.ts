import {
  combineReducers,
  configureStore, type EnhancedStore,
  type Reducer,
  type ReducersMapObject, type UnknownAction
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const createReduxStore = (initialState?: StateSchema): AppStore => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager =
    createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }) as unknown as AppStore

  store.reducerManager = reducerManager

  return store
}

export type ReducerKeys = keyof StateSchema

export interface AppStore extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema
  add: (key: ReducerKeys, reducer: Reducer) => void
  remove: (key: ReducerKeys) => void
}

const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: ReducerKeys[] = []

  return {
    add: (key: ReducerKeys, reducer: Reducer) => {
      if (!key || reducers[key]) return
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        })
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    remove: (key: ReducerKeys) => {
      if (!key || !reducers[key]) return
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
