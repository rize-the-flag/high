import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'

interface LoginByUserNameProps {
  userName: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData, { headers: { authorization: 'ok' } })
      return response.data
    } catch (e) {
      console.log(e)
      return thunkApi.rejectWithValue('e.message')
    }
  }
)
