import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import { type Profile } from '../../model/types/profile'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import Loader from 'shared/ui/Loader/Loader'
import Avatar from 'shared/ui/Avatar/Avatar'
import { type Currency } from 'entities/Currency/model/types/currency'
import { CurrencySelect } from 'entities/Currency'
import { type Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeCountry?: (value: Country) => void
  onChangeAvatar?: (value: string) => void
  onChangeUserName?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
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
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeUserName,
    onChangeCurrency,
    onChangeAvatar
  } = props

  const { t } = useTranslation()

  const mods: Mods = {
    [cls.editing]: !readonly
  }

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
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {
          data?.avatar &&
            <div className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} alt='User avatar' size={150}/>
            </div>
        }
        <Input
          value={data?.username}
          className={cls.input}
          placeholder={t('Username')}
          onChange={onChangeUserName}
          readonly={readonly}
        />
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
        <Input
          value={data?.city}
          className={cls.input}
          placeholder={t('City')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          className={cls.input}
          placeholder={t('Avatar')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}

export default ProfileCard
