import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {
  type ReactNode,
  type MouseEvent,
  useEffect, useCallback, useState, useRef
} from 'react'
import Portal from 'shared/ui/Portal/Portal'

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

  const mods: Record<string, boolean> = {
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
}

export default Modal
