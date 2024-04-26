import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { type FC, useCallback } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, getUserProfile, profileActions, saveProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { canEditProfile } from 'pages/ProfilePage/model/selectors/profilePageSelectors'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const {
    className
  } = props

  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const canEdit = useSelector(canEditProfile)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSaveEdit = useCallback(() => {
    void dispatch(saveProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('UserProfile')}/>
      {
        canEdit &&
          <div className={cls.btnWrapper}>
            {readonly
              ? (
                <Button
                  theme={ThemeButton.OUTLINE}
                  className={cls.editBtn}
                  onClick={onEdit}
                >
                  {t('EditProfile')}
                </Button>
                )
              : (
                <>
                  <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.editBtn}
                    onClick={onCancelEdit}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.editBtn}
                    onClick={onSaveEdit}
                  >
                    {t('Save')}
                  </Button>
                </>
                )
            }
          </div>
      }

    </div>
  )
}

export default ProfilePageHeader
