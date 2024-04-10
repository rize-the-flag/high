import {
  configureStore,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AsyncState, type StateSchema, type ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import {
  createReducerManager,
  type ReducerManager
} from 'shared/lib/reducerManager/createReducerManager'
import { $api } from 'shared/api/api'
import { type NavigateFunction } from 'react-router-dom'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<AsyncState>,
  navigate?: NavigateFunction
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager<StateSchema>(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store as (typeof store & { reducerManager: ReducerManager<StateSchema> })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type AppState = ReturnType<typeof createReduxStore>['getState']
