import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('should return error from state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'ERROR'
      }
    }

    expect(getLoginError(state as StateSchema)).toEqual('ERROR')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
