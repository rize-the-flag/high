import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from 'features/AuthByUsername/model/selectors/getIsLoading/getIsLoading'

describe('getIsLoading.test', () => {
  test('Should return isLoading => true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }

    expect(getIsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should work with empty state', () => {
    expect(getIsLoading({} as StateSchema)).toEqual(undefined)
  })
})
