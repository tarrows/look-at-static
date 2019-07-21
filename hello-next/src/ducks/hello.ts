import { Reducer } from "redux";

export const REQUEST_HELLO = 'REQUEST_HELLO'
export const SUCCESS_HELLO = 'SUCCESS_HELLO'
export const FAILURE_HELLO = 'FAILURE_HELLO'

export const requestHello = (name: string) => ({
  type: REQUEST_HELLO as typeof REQUEST_HELLO,
  payload: { name }
})

export const successHello = (msg: string) => ({
  type: SUCCESS_HELLO as typeof SUCCESS_HELLO,
  payload: { msg }
})

export const failureHello = (error: Error) => ({
  type: FAILURE_HELLO as typeof FAILURE_HELLO,
  payload: { error },
  error: true
})

export type Action = ReturnType<typeof requestHello | typeof successHello | typeof failureHello>

export interface HelloState {
  msg: string,
  count: number,
  communicating?: boolean,
  nameList: { id: number; name: string }[]
}

const initialState: HelloState = {
  msg: '',
  count: 0,
  nameList: []
}

const hello: Reducer<HelloState, Action> = (state = initialState, action): HelloState => {
  switch (action.type) {
    case REQUEST_HELLO:
      return { ...state, communicating: true }
    case SUCCESS_HELLO:
      const msg = action.payload.msg
      const count = state.count + 1
      return { msg, count, communicating: false, nameList: [...state.nameList, { id: count, name: msg }] }
    case FAILURE_HELLO:
      return { ...state, msg: 'ERROR', communicating: false }
    default:
      return state
  }
}

export default hello
