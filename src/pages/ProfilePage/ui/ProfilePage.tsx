import { classNames } from 'shared/lib/classNames/classNames'
import { useDynamicReducer } from 'shared/hooks/UseDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import {
  fetchProfileData,
  getIsProfileError,
  getIsProfileLoading, getProfileFormData,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  useDynamicReducer<StateSchema>('profile', profileReducer)

  const profileData = useSelector(getProfileFormData)
  const isLoading = useSelector(getIsProfileLoading)
  const error = useSelector(getIsProfileError)
  const readonly = useSelector(getProfileReadonly)

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      first: value
    }))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value
    }))
  }, [dispatch])

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div className={classNames('', {}, [className ?? ''])}>
      <ProfilePageHeader/>
      <ProfileCard
        data={profileData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeLastName={onChangeLastName}
        onChangeFirstName={onChangeFirstName}
      />
    </div>
  )
}

export default ProfilePage
