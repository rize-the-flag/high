import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from '../../selectors/getLoginState/getLoginState'

export const getPassword = (state: StateSchema) => getLoginState(state)?.password ?? ''
