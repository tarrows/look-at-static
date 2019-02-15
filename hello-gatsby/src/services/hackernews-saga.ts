import { call, put, takeLatest } from 'redux-saga/effects'
import hackernewsApi from './hackernews-api'
import { actionType } from './hackernews-actions'

function* getTopStories() {
  try {
    const topStoryIds: number[] = yield call(hackernewsApi.getTopStoryIds)
    yield put({type: actionType.FETCH_STORY_IDS_SUCCESS, stories: topStoryIds})
  } catch (e) {
    yield put({type: actionType.FETCH_STORY_IDS_FAILURE})
  }
}

function* sagaTopStoryIds() {
  yield takeLatest(actionType.FETCH_STORY_IDS_REQUEST, getTopStories)
}

export default sagaTopStoryIds
