import { all, call, fork, put, take } from 'redux-saga/effects'
import { successSetItem, failureSetItem } from '../ducks/wstorage/actions'
import { REQUEST_GET_ITEM } from '../ducks/wstorage/types'
import storage from '../services/web-storage/app'

export function* watchRequestSetItem() {
  console.log("watchRequestSetItem:start")
  while (true) {
    const action = yield take(REQUEST_GET_ITEM)
    console.log("watchRequestSetItem:take-request")
    const { key, value } = action.payload
    const { response, error } = yield call(storage.local.set, key, value)
    if (response && !error ) {
      console.log("watchRequestSetItem:put-success")
      yield put(successSetItem(response.key, response.value))
    } else {
      console.log("watchRequestSetItem:put-failure")
      yield put(failureSetItem(error))
    }
  }
}
