import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'entities/Currency'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const currencies = Object.values(Currency).map((currency) => ({
  value: currency,
  content: currency
}))

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const { t } = useTranslation()

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Currency')}
      options={currencies}
      onChange={onChange}
      value={value}
      readonly={readonly}
    />
  )
}

export default CurrencySelect
