import { all, call, fork, put, take, delay } from 'redux-saga/effects'
import { REQUEST_HELLO, successHello, requestHello } from '../ducks/hello'

function* watchRequestHello() {
  while (true) {
    const action: ReturnType<typeof requestHello> = yield take(REQUEST_HELLO)
    const { name } = action.payload
    const response: string = yield call(x => x + x, name)
    const _ = yield delay(500)
    yield put(successHello(response))
  }
}

export default function* hello() {
  yield all([
    fork(watchRequestHello)
  ])
}
