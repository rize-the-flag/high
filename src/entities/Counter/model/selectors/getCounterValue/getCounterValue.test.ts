import { getCounterValue } from './getCounterValue'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'

describe('getCounterValue test', () => {
  test('Should return exact value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
