import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDynamicReducer } from 'shared/hooks/UseDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  useDynamicReducer<StateSchema>('profile', profileReducer)
  return (
    <div className={classNames('', {}, [className ?? ''])}>
      {t('PROFILE_PAGE')}
    </div>
  )
}

export default ProfilePage
