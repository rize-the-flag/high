import React, { useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeButton, Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, isUser, type User, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthOpen] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector(getAuthData)

  const onShowModal = () => {
    setIsAuthOpen(true)
  }

  const onCloseModal = () => {
    setIsAuthOpen(false)
  }

  const signOut = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    dispatch(userActions.logOut())
  }

  useEffect(() => {
    const userStr = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    let user: User | undefined

    if (userStr) {
      user = JSON.parse(userStr)
      user = isUser(user) ? user : undefined
    }

    dispatch(userActions.setAuthData(user))
  }, [dispatch])

  if (auth) {
    return (
      <header className={classNames(cls.navbar, {}, [className ?? ''])}>
        <div className={cls.links}>
          <Button
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={signOut}
            data-testid='signOutBtn'
          >
            {t('SignOutBtn')}
          </Button>
        </div>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.links}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={onShowModal}
          data-testid='signInBtn'
        >
          {t('SignInBtn')}
        </Button>
      </div>

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  )
}

export default Navbar
