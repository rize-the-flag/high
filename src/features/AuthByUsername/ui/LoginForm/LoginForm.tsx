import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeButton, Button } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginFormActions, loginFormReducer } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getUserName } from 'features/AuthByUsername/model/selectors/getUserName/getUserName'
import { getPassword } from 'features/AuthByUsername/model/selectors/getPassword/getPassword'
import { getIsLoading } from 'features/AuthByUsername/model/selectors/getIsLoading/getIsLoading'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    className,
    onSuccess
  } = props

  const userName = useSelector(getUserName)
  const password = useSelector(getPassword)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getLoginError)

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginFormActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginFormActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ userName, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, userName])

  useDynamicReducer<StateSchema>('loginForm', loginFormReducer)

  return (
    <form
      onSubmit={onLoginClick}
      className={classNames(cls.loginForm, {}, [className ?? ''])}
    >
      <h3>{t('AuthorizationFormTitle')}</h3>
      <Input
        autoFocus={true}
        placeholder={t('UserName')}
        className={cls.input}
        onChange={onChangeUserName}
        value={userName}
      />
      <Input
        type='password'
        placeholder={t('Password')}
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />

      <Text style={{ visibility: error ? 'visible' : 'hidden' }} theme={TextTheme.ERROR} message={t('AuthFailed')}/>

      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('LoginFormAuthBtn')}
      </Button>

    </form>
  )
}

export default LoginForm
