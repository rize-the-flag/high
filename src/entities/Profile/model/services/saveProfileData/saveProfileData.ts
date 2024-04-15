import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileFormData, type Profile } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const saveProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/saveProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI

    try {
      const formData = getProfileFormData(getState())
      const response = await extra.api.put<Profile>('/profile', formData)
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
