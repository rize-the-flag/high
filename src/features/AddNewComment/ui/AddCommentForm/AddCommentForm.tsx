import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useDynamicReducer } from 'shared/hooks/useDynamicReducer/useDynamicReducer'
import { type StateSchema } from 'app/providers/StoreProvider'
import { addCommentSliceActions, addCommentSliceReducer } from '../../model/slices/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { getCommentText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const _AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const {
    className,
    onSendComment
  } = props
  const { t } = useTranslation()
  const text = useSelector(getCommentText)
  const dispatch = useAppDispatch()

  useDynamicReducer<StateSchema>({
    slice: 'addCommentForm',
    reducer: addCommentSliceReducer
  })

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentSliceActions.setText(value))
  }, [dispatch])

  const onSendHandler = () => {
    onCommentTextChange('')
    onSendComment(text || '')
  }

  return (
    <div className={classNames(cls.AddCommentForm, {}, [className])}>
      <Input
        placeholder={t('InputCommentPlaceholder')}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={onSendHandler}
      >{t('Send')}
      </Button>
    </div>
  )
}

export default memo(_AddCommentForm)
