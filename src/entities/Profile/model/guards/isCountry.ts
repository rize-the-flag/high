import { isEnumType } from 'shared/lib/guards/isEnumType'

import { Country } from 'entities/Country/model/types/country'

export const isCountry = (value: unknown): value is Country => isEnumType(value, Country)
