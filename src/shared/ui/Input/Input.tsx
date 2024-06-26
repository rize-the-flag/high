import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
  memo, type SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

const _Input: FC<InputProps> = (props) => {
  const {
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    readonly = false,
    autofocus = false,
    ...rest
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const isCarretVisible = isFocused && !readonly

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocused = () => {
    setIsFocused(true)
  }

  const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e?.currentTarget.selectionStart ?? 0)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) {
      inputRef?.current?.focus()
      setIsFocused(true)
    }
  }, [autofocus])

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocused}
          readOnly={readonly}
          onSelect={onSelect}
          {...rest}
        />
        {isCarretVisible && <span
            className={classNames(cls.caret)}
            style={{
              left: `${caretPosition * 9}px`
            }}
        />}
      </div>

    </div>
  )
}

export const Input = memo(_Input)
export default Input
