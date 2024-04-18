import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getProfileErrors } from './getProfileErrors'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

describe('getProfileErrors selector test', () => {
  const validationErrors = [
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.INCORRECT_COUNTRY
  ]
  const state: DeepPartial<StateSchema> = {
    profile: {
      validateError: [
        ...validationErrors
      ]
    }
  }

  test('should return a peace of state', () => {
    expect(getProfileErrors(state as StateSchema)).toEqual([...validationErrors])
  })

  test('should work with empty state', () => {
    expect(getProfileErrors({} as StateSchema)).toBe(undefined)
  })
})
