import { profileActions, profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type Profile, type ProfileSchema, saveProfileData } from 'entities/Profile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const profile: Profile = {
  first: '111',
  lastname: '222',
  age: 42,
  username: '333',
  country: Country.Kazakhstan,
  city: 'Vladivostok',
  currency: Currency.USD
}

describe('profileSlice.test', () => {
  test('readonly test', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true
    }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false })
  })

  test('cancelEdit test', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
      data: profile,
      form: {}
    }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateError: undefined,
        form: profile,
        data: profile
      })
  })

  test('updateProfile test', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '4321' }
    }
    const result = profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: '1234'
    }))

    expect(result).toEqual({ form: { username: '1234' } })
  })

  test('saveProfile.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false
    }

    const result = profileReducer(state as ProfileSchema, saveProfileData.pending('', undefined))
    expect(result).toEqual({ isLoading: true, validateError: undefined })
  })

  test('saveProfile.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false
    }

    const result = profileReducer(state as ProfileSchema, saveProfileData.fulfilled(profile, '', undefined))
    expect(result).toEqual({ isLoading: false, readonly: true, form: profile, data: profile })
  })
})
