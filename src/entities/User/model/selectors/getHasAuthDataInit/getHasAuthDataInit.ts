import { type StateSchema } from 'app/providers/StoreProvider'

export const getHasAuthDataInit = (state: StateSchema) => state.user.__has_init
