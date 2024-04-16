import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, type Key, memo, useMemo } from 'react'

type ValidSelectValues = string | number | readonly string[] | undefined
export interface SelectOptions <TValue extends ValidSelectValues = string> {
  value: TValue
  content: string
}
interface SelectProps<TValue extends ValidSelectValues> {
  className?: string
  label?: string
  options?: Array<SelectOptions<TValue>>
  value?: TValue
  onChange?: (value: TValue) => void
  readonly?: boolean
}

export function _Select<TValue extends ValidSelectValues = string> (props: SelectProps<TValue>) {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(evt.target.value as TValue)
  }

  const optionsList = useMemo(() => (
    options?.map(opt => (
      <option
        key={opt.value as Key}
        value={opt.value}
        className={cls.option}
      >
        {opt.content}
      </option>
    ))
  ), [options])

  const mods: Mods = {

  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}

export const Select = (memo(_Select) as typeof _Select)
