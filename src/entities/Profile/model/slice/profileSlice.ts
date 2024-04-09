import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, type Profile, type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.isLoading = false
    })

    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
