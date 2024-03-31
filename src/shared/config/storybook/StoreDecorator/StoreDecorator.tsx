import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => {
  const decorate: (StoryComponent: StoryFn) => JSX.Element = (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent/>
    </StoreProvider>
  )

  return decorate
}
