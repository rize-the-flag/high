import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileErrors = (state: StateSchema) => state.profile?.validateError
