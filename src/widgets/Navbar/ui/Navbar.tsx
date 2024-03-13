import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthOpen] = useState(false)

  const toggleSignIn = useCallback(() => {
    setIsAuthOpen(isOpen => !isOpen)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <LoginModal isOpen={isAuthModal} onClose={toggleSignIn}/>
      <div className={cls.links}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={toggleSignIn}
        >
          {t('SignInBtn')}
        </Button>
      </div>
    </div>
  )
}

export default Navbar
