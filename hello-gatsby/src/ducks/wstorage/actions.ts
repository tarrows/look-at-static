import * as types from './types'

export const requestSetItem = (key: string, value: string) => ({
  type: types.REQUEST_SET_ITEM as typeof types.REQUEST_SET_ITEM,
  payload: { key, value }
})

export const successSetItem = (key: string, value: string) => ({
  type: types.SUCCESS_SET_ITEM as typeof types.SUCCESS_SET_ITEM,
  payload: { key, value }
})

export const failureSetItem = (error: Error) => ({
  type: types.FAILURE_SET_ITEM as typeof types.FAILURE_SET_ITEM,
  payload: { error }
})

export const requestGetItem = (key: string) => ({
  type: types.REQUEST_GET_ITEM as typeof types.REQUEST_GET_ITEM,
  payload: { key }
})

export const successGetItem = (key: string, value: string) => ({
  type: types.SUCCESS_GET_ITEM as typeof types.SUCCESS_GET_ITEM,
  payload: { key, value }
})

export const failureGetItem = (error: Error) => ({
  type: types.FAILURE_GET_ITEM as typeof types.FAILURE_GET_ITEM,
  payload: { error }
})

export type SetAction = ReturnType<typeof requestSetItem | typeof successSetItem | typeof failureSetItem>
export type GetAction = ReturnType<typeof requestGetItem | typeof successGetItem | typeof failureGetItem>

const actions = {
  set: {
    request: requestSetItem,
    success: successSetItem,
    failure: failureSetItem
  },
  get: {
    request: requestGetItem,
    success: successGetItem,
    failure: failureGetItem
  }
}

export default actions
