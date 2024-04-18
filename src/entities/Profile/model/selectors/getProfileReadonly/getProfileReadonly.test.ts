import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly selector test', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      readonly: true
    }
  }

  test('should return a profile form state', () => {
    expect(getProfileReadonly(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    expect(getProfileReadonly({} as StateSchema)).toBe(undefined)
  })
})
