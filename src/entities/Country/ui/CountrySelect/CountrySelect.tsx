import { classNames } from 'shared/lib/classNames/classNames'
import { type FC, memo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Country } from 'entities/Country/model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (country: Country) => void
  readonly?: boolean
}

const coutries = Object.values(Country).map((country) => ({
  value: country,
  content: country
}))

const _CountrySelect: FC<CountrySelectProps> = (props) => {
  const {
    className,
    onChange,
    value,
    readonly
  } = props

  const { t } = useTranslation()

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Country')}
      options={coutries}
      value={value}
      onChange={onChange}
      readonly={readonly}
    />
  )
}

export const CountrySelect = memo(_CountrySelect)
