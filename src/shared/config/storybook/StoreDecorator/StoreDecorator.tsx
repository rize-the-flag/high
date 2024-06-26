import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginFormReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => {
  const decorate: (StoryComponent: StoryFn) => JSX.Element = (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent/>
    </StoreProvider>
  )

  return decorate
}
