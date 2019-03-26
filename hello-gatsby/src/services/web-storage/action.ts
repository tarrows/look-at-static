export const REQUEST_GET_ITEM = 'REQUEST_GET_ITEM'
export const SUCCESS_GET_ITEM = 'SUCCESS_GET_ITEM'
export const FAILURE_GET_ITEM = 'FAILURE_GET_ITEM'

export const REQUEST_SET_ITEM = 'REQUEST_SET_ITEM'
export const SUCCESS_SET_ITEM = 'SUCCESS_SET_ITEM'
export const FAILURE_SET_ITEM = 'FAILURE_SET_ITEM'

export const REQUEST_CLEAR_DB = 'REQUEST_CLEAR_DB'
export const SUCCESS_CLEAR_DB = 'SUCCESS_CLEAR_DB'
export const FAILURE_CLEAR_DB = 'FAILURE_CLEAR_DB'

export const actionType = {
  REQUEST_GET_ITEM, SUCCESS_GET_ITEM, FAILURE_GET_ITEM,
  REQUEST_SET_ITEM, SUCCESS_SET_ITEM, FAILURE_SET_ITEM
  // REQUEST_CLEAR_DB, SUCCESS_CLEAR_DB, FAILURE_CLEAR_DB
}

export const requestSetItem = (key: string, value: string) => ({
  type: REQUEST_SET_ITEM as typeof REQUEST_SET_ITEM,
  payload: { key, value }
})

export const successSetItem = (key: string, value: string) => ({
  type: SUCCESS_SET_ITEM as typeof SUCCESS_SET_ITEM,
  payload: { key, value }
})

export const failureSetItem = (error: Error) => ({
  type: FAILURE_SET_ITEM as typeof FAILURE_SET_ITEM,
  payload: { error }
})

export const requestGetItem = (key: string) => ({
  type: REQUEST_GET_ITEM as typeof REQUEST_GET_ITEM,
  payload: { key }
})

export const successGetItem = (key: string, value: string) => ({
  type: SUCCESS_GET_ITEM as typeof SUCCESS_GET_ITEM,
  payload: { key, value }
})

export const failureGetItem = (error: Error) => ({
  type: FAILURE_GET_ITEM as typeof FAILURE_GET_ITEM,
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
