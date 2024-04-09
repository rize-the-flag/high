import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className
  } = props

  const profileData = useSelector(getUserProfile)
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('UserProfile')}/>
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.editBtn}
        >
          {t('EditProfileButton')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={profileData?.first}
          className={cls.input}
          placeholder={t('firstName')}
        />
        <Input
          value={profileData?.lastname}
          className={cls.input}
          placeholder={t('lastName')}
        />
        <Input
          value={profileData?.age.toString()}
          className={cls.input}
          placeholder={t('Age')}
        />
      </div>
    </div>
  )
}

export default ProfileCard
