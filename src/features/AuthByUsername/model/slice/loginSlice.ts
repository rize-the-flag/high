import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'

const initialState: LoginSchema = {
  userName: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },

    clearAuthData: (state) => {
      state.password = ''
      state.userName = ''
      state.error = undefined
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })

    builder.addCase(loginByUserName.fulfilled, (state) => {
      state.isLoading = false
    })

    builder.addCase(loginByUserName.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }

})

export const { actions: loginFormActions } = loginSlice
export const { reducer: loginFormReducer } = loginSlice
