import {
  configureStore,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
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
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
) {
  const rootReducer = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  });

  (store as (typeof store & { reducerManager: ReducerManager<StateSchema> })).reducerManager = reducerManager

  return store as (typeof store & { reducerManager: ReducerManager<StateSchema> })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type AppState = ReturnType<typeof createReduxStore>['getState']
