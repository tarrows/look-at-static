import { all, call, fork, put, take } from 'redux-saga/effects'
import { REQUEST_GET_ITEM, successSetItem, failureSetItem } from './action'
import storage from './app'

function* watchRequestSetItem() {
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

export default function* root() {
  yield all([
    fork(watchRequestSetItem)
  ])
}
