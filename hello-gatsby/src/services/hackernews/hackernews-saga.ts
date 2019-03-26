import { call, fork, put, take, takeLatest } from 'redux-saga/effects'
import hackernewsApi from './hackernews-api'
import { actionType } from './hackernews-actions'
import { Story } from './hackernews-api'

function* requestStoriesHandler() {
  console.log("requestStoriesHandler called")
  // while (true) {
    try {
      const action = yield take(actionType.FETCH_STORY_IDS_SUCCESS)
      const stories: Story[] = yield call(hackernewsApi.getStoriesByPage, action.payload.storyIds, 0)
      yield put({ type: actionType.FETCH_STORIES_SUCCESS, stories: stories })
    } catch(e) {
      yield put({ type: actionType.FETCH_STORIES_FAILURE, error: e as Error })
    }
  // }
}

function* requestTopStoryIdsHandler() {
  console.log("requestTopStoryIdsHandler called")
  //while (true) {
    try {
      const _ = yield take(actionType.FETCH_STORY_IDS_REQUEST)
      console.log("TAKE A REQUEST")
      const topStoryIds: number[] = yield call(hackernewsApi.getTopStoryIds)
      yield put({ type: actionType.FETCH_STORY_IDS_SUCCESS, storyIds: topStoryIds })
    } catch (e) {
      yield put({ type: actionType.FETCH_STORY_IDS_FAILURE, error: e as Error })
    }
  // }
}

export function* sagaTopStoryIds() {
  yield takeLatest(actionType.FETCH_STORY_IDS_REQUEST, requestTopStoryIdsHandler)
}

function* rootSaga() {
  console.log("rootSaga called")
  yield fork(requestTopStoryIdsHandler)
  yield fork(requestStoriesHandler)
}

export default rootSaga
