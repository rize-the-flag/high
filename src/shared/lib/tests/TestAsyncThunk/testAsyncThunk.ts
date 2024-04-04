import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
  rejectValue: RejectValue
}>

export class TestAsyncThunk<Return, Arg, RejectValue> {
  actionCreator: ActionCreatorType<Return, Arg, RejectValue>
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema

  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    return await action(this.dispatch, this.getState, undefined)
  }
}
