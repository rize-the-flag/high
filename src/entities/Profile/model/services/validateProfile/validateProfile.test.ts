import { type Profile } from 'entities/Profile'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { validateProfileData } from 'entities/Profile/model/services/validateProfile/validateProfileData'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { Country } from 'entities/Country'

describe('ValidateProfileData.tests', () => {
  const profile: DeepPartial<Profile> = {
    first: '',
    lastname: '',
    age: 0,
    username: '',
    country: undefined
  }

  test('Invalid inputs', () => {
    const result = validateProfileData(profile)
    expect(result).toEqual([
      ValidateProfileError.INVALID_USERNAME,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })

  test('No data', () => {
    const result = validateProfileData()
    expect(result).toEqual([
      ValidateProfileError.NO_DATA
    ])
  })

  test('Valid data', () => {
    const result = validateProfileData({
      country: Country.Kazakhstan,
      age: 32,
      username: 'aaa',
      lastname: 'bbb',
      first: 'ccc'
    })
    expect(result).toEqual([])
  })
})
