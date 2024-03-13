import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {
  type ReactNode,
  type MouseEvent,
  useEffect, useCallback
} from 'react'
import Portal from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    onClose
  } = props

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (evt: MouseEvent) => {
    evt.stopPropagation()
  }

  const onKeyDown = useCallback((ev: KeyboardEvent): any => {
    if (ev.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className ?? ''])}>
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
  )
}

export default Modal
