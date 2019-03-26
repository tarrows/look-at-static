import { Reducer } from 'redux'

import { actionType } from './hackernews-actions'
import { StoryActions } from './hackernews-actions'
import { initialState, StoryState } from './hackernews-actions'

const story: Reducer<StoryState, StoryActions> = (state = initialState, { type, payload }): StoryState =>{
  switch (type) {
    case actionType.FETCH_STORY_IDS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionType.FETCH_STORY_IDS_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export default story
