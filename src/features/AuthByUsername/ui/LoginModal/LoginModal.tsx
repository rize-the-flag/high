import { type FC } from 'react'
import Modal from 'shared/ui/Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpen,
    onClose
  } = props

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm/>
    </Modal>
  )
}

export default LoginModal
