import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk'
import { type Profile } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData } from './fetchProfileData'

describe('getIsLoading.test', () => {
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

  test('Should return Profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: profile
    }))

    const result = await thunk.callThunk('1')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })
})
