import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { getProfileFormData } from './getProfileFormData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileFormData selector test', () => {
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
      form: profile
    }
  }

  test('should return a profile form state', () => {
    expect(getProfileFormData(state as StateSchema)).toEqual({ ...profile })
  })

  test('should work with empty state', () => {
    expect(getProfileFormData({} as StateSchema)).toBe(undefined)
  })
})
