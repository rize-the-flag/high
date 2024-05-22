import { type User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUserNameProps {
  userName: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const {
      extra,
      dispatch,
      rejectWithValue
    } = thunkAPI

    try {
      const response = await extra.api.post<User>('/login', authData, { headers: { authorization: '' } })
      dispatch(userActions.setAuthData(response.data))
      console.log(response.data)
      storeAuthToLocalStorage(response.data)
      return response.data
    } catch (e) {
      return rejectWithValue(i18n.t('LoginFailErrorMessage'))
    }
  }
)

export const storeAuthToLocalStorage = (userData: User) => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData))
}
