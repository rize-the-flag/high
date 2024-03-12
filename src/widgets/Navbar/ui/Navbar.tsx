import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import Modal from 'shared/ui/Modal/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isSignInOpen, setSignInOpen] = useState(false)

  const toggleSignIn = useCallback(() => {
    setSignInOpen(isOpen => !isOpen)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <Modal isOpen={isSignInOpen} onClose={toggleSignIn}>
        {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsam neque nobis similique! Accusantium adipisci alias aut cumque debitis deleniti ipsam ipsum maxime, modi nostrum quam quissaepe ullam vitae!')}
      </Modal>
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
