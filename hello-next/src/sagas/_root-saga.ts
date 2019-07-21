import { all, fork } from 'redux-saga/effects'
import hello from './hello'

export default function* rootSaga() {
  yield all([
    fork(hello)
  ])
}
