import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDynamicReducer } from 'shared/hooks/UseDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import {
  fetchProfileData, ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  useDynamicReducer<StateSchema>('profile', profileReducer)

  return (
    <div className={classNames('', {}, [className ?? ''])}>
      <ProfileCard/>
    </div>
  )
}

export default ProfilePage
