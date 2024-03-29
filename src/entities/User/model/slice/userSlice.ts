import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },

    signOut: (state) => {
      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
