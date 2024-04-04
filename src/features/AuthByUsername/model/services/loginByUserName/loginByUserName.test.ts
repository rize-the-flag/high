import axios from 'axios'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { createAsyncThunk, type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('getIsLoading.test', () => {
  /*  let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
      dispatch = jest.fn()
      getState = jest.fn()
    })

    test('[Positive] Should return result of login request', async () => {
      mockedAxios.post.mockReturnValue(Promise.resolve({
        data: {
          userName: '123',
          id: 1
        }
      }))
      const action = loginByUserName({ userName: '123', password: '123' })
      const result = await action(dispatch, getState, undefined)
      expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({ userName: '123', id: 1 }))
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

      const action = loginByUserName({ userName: '123', password: '123' })
      const result = await action(dispatch, getState, undefined)
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(mockedAxios.post).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('LoginFailErrorMessage')
    }) */

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
