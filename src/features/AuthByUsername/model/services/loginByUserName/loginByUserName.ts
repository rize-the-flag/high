import axios from 'axios'
import { type User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { type AppDispatch } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUserNameProps {
  userName: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {
  dispatch: AppDispatch
  rejectValue: string
}>(
  'login/loginByUserName',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData, { headers: { authorization: '' } })
      thunkApi.dispatch(userActions.setAuthData(response.data))
      storeAuthToLocalStorage(response.data)
      return response.data
    } catch (e) {
      return thunkApi.rejectWithValue(i18n.t('LoginFailErrorMessage'))
    }
  }
)

export const storeAuthToLocalStorage = (userData: User) => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData))
}
