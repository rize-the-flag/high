import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'

describe('getLoginState.test', () => {
  test('Should login form state slices', () => {
    const state: Pick<StateSchema, 'loginForm'> = {
      loginForm: {
        userName: 'ABCD',
        password: '1234',
        isLoading: false
      }
    }

    expect(getLoginState(state as StateSchema)).toEqual({
      isLoading: false,
      password: '1234',
      userName: 'ABCD'
    })
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
})
