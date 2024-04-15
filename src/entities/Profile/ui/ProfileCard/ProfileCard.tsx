import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import { type Profile } from '../../model/types/profile'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import Loader from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly = true,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge
  } = props

  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader/>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('FetchingProfileDataError')}
          message={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.first}
          className={cls.input}
          placeholder={t('firstName')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          className={cls.input}
          placeholder={t('lastName')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age?.toString()}
          className={cls.input}
          placeholder={t('Age')}
          onChange={onChangeAge}
          readonly={readonly}
        />
      </div>
    </div>
  )
}

export default ProfileCard
