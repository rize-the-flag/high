import axios from 'axios'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('getIsLoading.test', () => {
  test('[Positive] Should return result of login request', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: {
        userName: '123',
        id: 1
      }
    }))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ userName: '123', password: '123' })
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ userName: '123', id: 1 }))
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual({ userName: '123', id: 1 })
  })

  test('[Positive] Auth Error', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    mockedAxios.post.mockReturnValue(Promise.reject({
      status: 403
    }))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ userName: '123', password: '123' })
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('LoginFailErrorMessage')
  })
})
