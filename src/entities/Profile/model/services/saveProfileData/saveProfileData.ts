import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileFormData, type Profile } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { validateProfileData } from 'entities/Profile/model/services/validateProfile/validateProfileData'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

export const saveProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
  'profile/saveProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI
    const formData = getProfileFormData(getState())
    const errors = validateProfileData(formData)

    if (errors.length > 0) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData)
      console.log(response)
      if (!response.data) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
      }
      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
