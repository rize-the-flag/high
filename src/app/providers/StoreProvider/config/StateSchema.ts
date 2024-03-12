/*
export interface CounterState {
  value: number
}
*/

import { type CounterSchema } from 'entities/Counter'

export interface StateSchema {
  counter: CounterSchema
}
