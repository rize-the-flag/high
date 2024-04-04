import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getUserName } from './getUserName'

describe('getUserName.test', () => {
  test('Should return user name from state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        userName: 'aaaabbbb'
      }
    }

    expect(getUserName(state as StateSchema)).toEqual('aaaabbbb')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getUserName(state as StateSchema)).toEqual('')
  })
})
