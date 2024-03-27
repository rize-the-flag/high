import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { type AppStore } from 'app/providers/StoreProvider/config/store'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    className
  } = props

  const loginState = useSelector(getLoginState)
  const { t } = useTranslation()

  // FIXME: do it properly
  const store = useStore.withTypes<AppStore>()()

  const dispatch = useDispatch<any>()

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = () => {
    dispatch(loginByUserName({ userName: loginState?.userName, password: loginState?.password }))
  }

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer)
    return () => {
      store.reducerManager.remove('loginForm')
    }
  }, [store])

  return (
    <form onSubmit={onLoginClick} className={classNames(cls.loginForm, {}, [className ?? ''])}>
      <Input
        autoFocus={true}
        placeholder={t('UserName')}
        className={cls.input}
        onChange={onChangeUserName}
        value={loginState?.userName}
      />
      <Input
        type='password'
        placeholder={t('Password')}
        className={cls.input}
        onChange={onChangePassword}
        value={loginState?.password}
      />
      {loginState?.error && <Text theme={TextTheme.ERROR} message='Вы точно не правы'/>}

      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={loginState?.isLoading}
      >
        {t('LoginBtn')}
      </Button>

    </form>
  )
}

export default LoginForm
