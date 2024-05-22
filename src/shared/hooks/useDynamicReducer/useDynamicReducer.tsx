import { type ReducerFromReducersMapObject, type ReducersMapObject } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { type StoreWithReducerManager } from 'shared/lib/reducerManager/createReducerManager'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface UseDynamicReducerArgs<TState extends object> {
  slice: keyof TState
  reducer: ReducerFromReducersMapObject<ReducersMapObject<TState>>
  removeAfterUnmount?: boolean
}

export function useDynamicReducer<TState extends object> ({ slice, reducer, removeAfterUnmount = true }: UseDynamicReducerArgs<TState>) {
  const state = useStore.withTypes<StoreWithReducerManager<TState>>()()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const wasMounted = Object.keys(state.reducerManager.getReducerMap()).some(s => s === slice)
    if (!wasMounted) {
      state.reducerManager.add(slice, reducer)
      dispatch({ type: `@INIT ASYNC ${String(slice)}` })
    }

    if (removeAfterUnmount) {
      return () => {
        state.reducerManager.remove(slice)
        dispatch({ type: `@DESTROY ASYNC ${String(slice)}` })
      }
    }
  }, [dispatch, reducer, removeAfterUnmount, slice, state, state.reducerManager])
}
