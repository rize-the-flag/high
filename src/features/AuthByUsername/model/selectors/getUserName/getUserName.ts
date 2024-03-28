import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from '../../selectors/getLoginState/getLoginState'

export const getUserName = (state: StateSchema) => getLoginState(state)?.userName ?? ''
