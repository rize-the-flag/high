import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getIsProfileError } from './getIsProfileError'

describe('getIsProfileError selector test', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      error: 'ERROR'
    }
  }

  test('should return a peace of state', () => {
    expect(getIsProfileError(state as StateSchema)).toBe('ERROR')
  })

  test('should work with empty state', () => {
    expect(getIsProfileError({} as StateSchema)).toBe(undefined)
  })
})
