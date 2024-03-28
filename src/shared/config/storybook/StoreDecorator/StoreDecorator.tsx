import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
  return (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state as StateSchema}>
      <StoryComponent/>
    </StoreProvider>
  )
}
