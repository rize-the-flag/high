import { type FC } from 'react'
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = (props) => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div data-testid='counter'>
      <h1 data-testid = 'value-title'>{counterValue}</h1>
      <Button data-testid='incrementBtn' theme={ThemeButton.OUTLINE} square={true} size={ButtonSize.M} onClick={increment}>+</Button>
      <Button data-testid='decrementBtn' theme={ThemeButton.OUTLINE} square={true} size={ButtonSize.M} onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
