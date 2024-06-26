import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {
  type ReactNode,
  type MouseEvent,
  useEffect, useCallback, useState
} from 'react'
import Portal from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    lazy = false
  } = props

  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.open]: isMounted
  }

  const closeHandler = useCallback(() => {
    onClose && onClose()
  }, [onClose])

  const onContentClick = (evt: MouseEvent) => {
    evt.stopPropagation()
  }

  const onKeyDown = useCallback((ev: KeyboardEvent): any => {
    (ev.key === 'Escape') && closeHandler()
  }, [closeHandler])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      return () => {
        setIsMounted(false)
      }
    }
  }, [isOpen])

  if (lazy && !isOpen) {
    return null
  }

  return <Portal>
    <div className={classNames(cls.modal, mods, [className ?? '', theme, 'app_modal'])}>
      <div className={cls.overlay} onClick={closeHandler} role='button'>
        <div
          className={cls.content}
          onClick={onContentClick}
          role='button'
        >
          {children}
        </div>
      </div>
    </div>
  </Portal>
}

export default Modal
