import { isEnumType } from 'shared/lib/guards/isEnumType'

import { Currency } from 'entities/Currency/model/types/currency'

export const isCurrency = (value: unknown): value is Currency => isEnumType(value, Currency)
