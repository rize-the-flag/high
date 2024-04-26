import { classNames } from 'shared/lib/classNames/classNames'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import {
  fetchProfileData,
  getIsProfileError,
  getIsProfileLoading,
  getProfileErrors,
  getProfileFormData,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { isCurrency } from 'entities/Profile/model/guards/isCurrency'
import { isCountry } from 'entities/Profile/model/guards/isCountry'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country/model/types/country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'

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
  const validateErrors = useSelector(getProfileErrors)
  const { t } = useTranslation()
  const { id: profileId } = useParams<{ id: string }>()

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('ServerError'),
    [ValidateProfileError.NO_DATA]: t('NoProfileData'),
    [ValidateProfileError.INVALID_USERNAME]: t('IncorrectUserName'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('IncorrectCountry'),
    [ValidateProfileError.INCORRECT_AGE]: t('IncorrectAge'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('IncorrectUserData')
  }

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

  const onChangeAge = useCallback((value: string) => {
    console.log(value)
    if (/^\d*$/.test(value)) {
      dispatch(profileActions.updateProfile({
        age: Number(value)
      }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      city: value
    }))
  }, [dispatch])

  const onChangeUserName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      username: value
    }))
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(fetchProfileData(profileId))
  }, [dispatch, profileId])

  const onChangeCountry = useCallback((value: Country) => {
    if (isCountry(value)) {
      dispatch(profileActions.updateProfile({
        country: value
      }))
    }
  }, [dispatch])

  const onChangeCurrency = useCallback((value: Currency) => {
    if (isCurrency(value)) {
      dispatch(profileActions.updateProfile({
        currency: value
      }))
    }
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value
    }))
  }, [dispatch])

  return (
    <div className={classNames('', {}, [className ?? ''])}>
      <ProfilePageHeader/>
      {(validateErrors?.length) && validateErrors.map(error => (
        <Text
          key={error}
          theme={TextTheme.ERROR}
          message={validateErrorTranslates[error]}
        />
      ))}
      <ProfileCard
        data={profileData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeLastName={onChangeLastName}
        onChangeFirstName={onChangeFirstName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
        onChangeUserName={onChangeUserName}
      />
    </div>
  )
}

export default ProfilePage
