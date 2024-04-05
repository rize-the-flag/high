import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type StoreWithReducerManager } from 'shared/lib/reducerManager/createReducerManager'

export function useDynamicReducer<TState extends Record<string, any>> (slice: keyof TState, reducer: Reducer<TState[keyof TState]>) {
  const state = useStore.withTypes<StoreWithReducerManager<TState>>()()
  const dispatch = useDispatch()

  useEffect(() => {
    state.reducerManager.add(slice, reducer)
    dispatch({ type: `@INIT ASYNC ${String(slice)}` })
    console.log(state.getState())
    return () => {
      state.reducerManager.remove(slice)
      dispatch({ type: `@DESTROY ASYNC ${String(slice)}` })
      console.log(state.getState())
    }
  }, [dispatch, reducer, slice, state, state.reducerManager])
}
