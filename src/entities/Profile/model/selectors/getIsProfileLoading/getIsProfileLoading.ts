import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsProfileLoading = (state: StateSchema) => state?.profile?.isLoading ?? false
