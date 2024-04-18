import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getIsProfileLoading } from './getIsProfileLoading'

describe('getIsProfileError selector test', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      isLoading: true
    }
  }

  test('should return a peace of state', () => {
    expect(getIsProfileLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    expect(getIsProfileLoading({} as StateSchema)).toBe(false)
  })
})
