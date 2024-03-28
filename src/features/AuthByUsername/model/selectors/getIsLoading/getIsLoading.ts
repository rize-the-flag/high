import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from '../../selectors/getLoginState/getLoginState'

export const getIsLoading = (state: StateSchema) => getLoginState(state)?.isLoading
