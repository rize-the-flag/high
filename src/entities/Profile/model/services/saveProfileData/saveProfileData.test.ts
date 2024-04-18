import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk'
import { type Profile } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { saveProfileData } from './saveProfileData'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

describe('saveProfileData.test', () => {
  const profile: Profile = {
    country: Country.Kazakhstan,
    username: 'bbb',
    age: 42,
    city: 'City',
    currency: Currency.USD,
    lastname: 'Aaa',
    first: 'Bbb',
    avatar: 'aaa.jpg'
  }

  test('Should return updated profile data', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: {
        form: profile
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({
      data: profile
    }))

    const result = await thunk.callThunk(undefined)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test('Invalid data passed. should return error', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: {
        form: {
          ...profile,
          first: ''
        }
      }
    })
    const result = await thunk.callThunk(undefined)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  test('Return Error 403.', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: {
        form: {
          ...profile
        }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })
})
