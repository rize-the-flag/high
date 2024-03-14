import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    className
  } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className ?? ''])}>
      <Input autoFocus={true} placeholder={t('UserName')} className={cls.input} />
      <Input placeholder={t('Password')} className={cls.input} />
      <Button className={cls.loginBtn}>{t('LoginBtn')}</Button>
    </div>
  )
}

export default LoginForm
