import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'

export const fetchProfileData = createAsyncThunk<Profile, never, ThunkConfig<string>>(
  'profile',
  async (_, thunkApi) => {
    const {
      extra,
      rejectWithValue
    } = thunkApi

    try {
      const response = await extra.api.get<Profile>('/profile')
      return response.data
    } catch (e) {
      rejectWithValue(i18n.t('GetProfileErrorMessage'))
    }
  }
)
