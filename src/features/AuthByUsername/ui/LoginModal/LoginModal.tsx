import { type FC, Suspense } from 'react'
import Modal from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import Loader from 'shared/ui/Loader/Loader'

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
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync/>
      </Suspense>
    </Modal>
  )
}

export default LoginModal
