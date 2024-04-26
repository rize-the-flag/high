import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { type StoreWithReducerManager } from 'shared/lib/reducerManager/createReducerManager'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export function useDynamicReducer<TState extends object> (slice: keyof TState, reducer: Reducer) {
  const state = useStore.withTypes<StoreWithReducerManager<TState>>()()
  const dispatch = useAppDispatch()

  useEffect(() => {
    state.reducerManager.add(slice, reducer)
    dispatch({ type: `@INIT ASYNC ${String(slice)}` })
    console.info(state.getState())
    return () => {
      state.reducerManager.remove(slice)
      dispatch({ type: `@DESTROY ASYNC ${String(slice)}` })
      console.info(state.getState())
    }
  }, [dispatch, reducer, slice, state, state.reducerManager])
}
