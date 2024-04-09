import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsProfileError = (state: StateSchema) => state?.profile?.error
