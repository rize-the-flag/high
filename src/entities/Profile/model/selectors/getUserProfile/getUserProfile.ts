import { type StateSchema } from 'app/providers/StoreProvider'

export const getUserProfile = (state: StateSchema) => state?.profile?.data
