import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { isUser } from 'entities/User'

const initialState: UserSchema = {
  __has_init: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User | undefined>) => {
      if (isUser(action?.payload)) {
        state.authData = action?.payload
      }
      state.__has_init = true
    },

    logOut: (state) => {
      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
