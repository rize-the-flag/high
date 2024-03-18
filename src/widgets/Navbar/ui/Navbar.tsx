import React, { useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, isUser, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthOpen] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector(getAuthData)

  const toggleSignIn = useCallback(() => {
    setIsAuthOpen(isOpen => !isOpen)
  }, [])

  const signOut = () => {
    dispatch(userActions.signOut())
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? '{}')
    isUser(user) && dispatch(userActions.setAuthData(user))
  }, [dispatch])

  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <LoginModal isOpen={isAuthModal} onClose={toggleSignIn}/>
      <div className={cls.links}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={auth ? signOut : toggleSignIn}
        >
          {auth ? t('SignOutBtn') : t('SignInBtn')}
        </Button>
      </div>
    </div>
  )
}

export default Navbar
