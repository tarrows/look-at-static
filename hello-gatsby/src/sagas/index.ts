import { all, fork } from 'redux-saga/effects'

import { watchRequestSetItem } from './wstorage'

export default function* root() {
  yield all([
    fork(watchRequestSetItem)
  ])
}
