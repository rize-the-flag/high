import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, type Profile, type ProfileSchema } from 'entities/Profile'
import { saveProfileData } from '../services/saveProfileData/saveProfileData'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },

    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },

    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.form = action.payload
      state.isLoading = false
    })

    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(saveProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    builder.addCase(saveProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(saveProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.readonly = true
      state.data = action.payload
      state.form = action.payload
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
