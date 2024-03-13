import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (StoryComponent: StoryFn) => (
  <StoreProvider initialState={{
    counter: { value: 1 }
  }}>
    <StoryComponent/>
  </StoreProvider>
)
