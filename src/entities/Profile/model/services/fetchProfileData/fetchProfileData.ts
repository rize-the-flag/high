import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile',
  async (profileId, thunkApi) => {
    const {
      extra,
      rejectWithValue
    } = thunkApi

    if (!profileId) {
      return rejectWithValue('GetProfileNoId')
    }

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)
      return response.data
    } catch (e) {
      return rejectWithValue(i18n.t('GetProfileErrorMessage'))
    }
  }
)
