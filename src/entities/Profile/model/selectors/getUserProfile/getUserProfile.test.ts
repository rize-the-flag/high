import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getUserProfile } from './getUserProfile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getUserProfile selector test', () => {
  const profile = {
    first: 'Aaa',
    lastname: 'Bbb',
    city: 'Cccc',
    age: 42,
    currency: Currency.USD,
    username: 'aaa@bbb.com',
    country: Country.Belarus
  }

  const state: DeepPartial<StateSchema> = {
    profile: {
      data: profile
    }
  }

  test('should return a profile form state', () => {
    expect(getUserProfile(state as StateSchema)).toEqual({ ...profile })
  })

  test('should work with empty state', () => {
    expect(getUserProfile({} as StateSchema)).toBe(undefined)
  })
})
