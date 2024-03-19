import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginFormActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    className
  } = props

  const { password, userName, error, isLoading } = useSelector(getLoginState)

  const dispatch = useDispatch<any>()

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginFormActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginFormActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = () => {
    dispatch(loginByUserName({ userName, password }))
  }

  useEffect(() => {
    dispatch(loginFormActions.clearAuthData())
  }, [dispatch])

  const { t } = useTranslation()

  return (
    <form
      onSubmit={onLoginClick}
      className={classNames(cls.loginForm, {}, [className ?? ''])}
    >
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
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('LoginBtn')}
      </Button>
      {error && <Text theme={TextTheme.ERROR} message={t('UserNotFound')}/>}
    </form>
  )
}

export default LoginForm
