import {
  type ActionFromReducer,
  combineReducers,
  type EnhancedStore,
  type Reducer,
  type ReducerFromReducersMapObject,
  type ReducersMapObject,
  type UnknownAction
} from '@reduxjs/toolkit'

export interface ReducerManager<TState extends Record<string, any>> {
  getReducerMap: () => ReducersMapObject<TState>
  reduce: (state: TState, action: UnknownAction) => TState
  add: (key: keyof TState, reducer: Reducer) => void
  remove: (key: keyof TState) => void
}

export interface StoreWithReducerManager<TState extends Record<string, any>> extends EnhancedStore<TState> {
  reducerManager: ReducerManager<TState>
}

export function createReducerManager<
  TState extends Record<string, any> = object,
> (initialReducers: ReducersMapObject<TState>) {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers<ReducersMapObject<TState>>(reducers)
  let keysToRemove: Array<keyof TState> = []

  return {
    add: (slice: keyof TState, reducer: ReducerFromReducersMapObject<ReducersMapObject<TState>>) => {
      if (!slice || reducers[slice]) return
      reducers[slice] = reducer
      combinedReducer = combineReducers(reducers)
    },

    getReducerMap: () => reducers,

    reduce: (state: TState | undefined, action: ActionFromReducer<ReducerFromReducersMapObject<ReducersMapObject<TState>>>) => {
      if (keysToRemove.length > 0 && state) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state?.[key]
        })
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    remove: (key: keyof TState) => {
      if (!key || !reducers[key]) return
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
