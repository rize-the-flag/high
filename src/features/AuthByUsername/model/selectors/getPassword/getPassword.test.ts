import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword.test', () => {
  test('Should return password from state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123456'
      }
    }

    expect(getPassword(state as StateSchema)).toEqual('123456')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getPassword(state as StateSchema)).toEqual('')
  })
})
