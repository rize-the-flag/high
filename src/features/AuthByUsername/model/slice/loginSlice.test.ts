import { type LoginSchema } from 'features/AuthByUsername'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { loginFormActions, loginFormReducer } from 'features/AuthByUsername/model/slice/loginSlice'

describe('loginSlice.test', () => {
  test('TEST set userName', () => {
    const state: DeepPartial<LoginSchema> = { userName: '123' }
    expect(loginFormReducer(state as LoginSchema, loginFormActions.setUserName('123123'))).toEqual({
      userName: '123123'
    })
  })

  test('TEST set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginFormReducer(state as LoginSchema, loginFormActions.setPassword('123123'))).toEqual({
      password: '123123'
    })
  })
})
