import { Action, Dispatch } from 'redux'

import hackernewsApi from './hackernews-api'
import { Story } from './hackernews-api'

export const actionTypes = {
  FETCH_STORIES_FAILURE: `FETCH_STORIES_FAILURE`,
  FETCH_STORIES_REQUEST: `FETCH_STORIES_REQUEST`,
  FETCH_STORIES_SUCCESS: `FETCH_STORIES_SUCCESS`,
  FETCH_STORY_IDS_FAILURE: `FETCH_STORY_IDS_FAILURE`,
  FETCH_STORY_IDS_REQUEST: `FETCH_STORY_IDS_REQUEST`,
  FETCH_STORY_IDS_SUCCESS: `FETCH_STORY_IDS_SUCCESS`,
}

export enum actionType {
  FETCH_STORIES_FAILURE,
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORY_IDS_FAILURE,
  FETCH_STORY_IDS_REQUEST,
  FETCH_STORY_IDS_SUCCESS,
}

export interface StoryState {
  storyIds: number[]
  stories: Story[]
  page: number
  isFetching: boolean
  error?: Error
}

export const initialState: StoryState = {
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: undefined
}

export type StoryActions = fetchStoryIdsRequestAction | fetchStoryIdsSuccessAction | fetchStoryIdsFailureAction

export interface fetchStoryIdsRequestAction extends Action {
  readonly type: actionType.FETCH_STORY_IDS_REQUEST;
  readonly payload: {};
}


export interface fetchStoryIdsSuccessAction extends Action {
  readonly type: actionType.FETCH_STORY_IDS_SUCCESS;
  readonly payload: {
    readonly storyIds: number[];
    readonly page: number;
  };
}

export interface fetchStoryIdsFailureAction extends Action {
  readonly type: actionType.FETCH_STORY_IDS_FAILURE;
  readonly payload: {
    readonly error: Error;
  };
};

const fetchStoryIdsRequest = (): fetchStoryIdsRequestAction => {
  return {
    type: actionType.FETCH_STORY_IDS_REQUEST,
    payload: {}
  }
}

const fetchStoryIdsSuccess = (storyIds: number[]): fetchStoryIdsSuccessAction => {
  return {
    type: actionType.FETCH_STORY_IDS_SUCCESS,
    payload: { storyIds, page: 0 }
  };
};

const fetchStoryIdsFailure = (error: Error): fetchStoryIdsFailureAction => {
  return {
    type: actionType.FETCH_STORY_IDS_FAILURE,
    payload: { error }
  };
};

export const fetchStoryIds = (_?: StoryState) => {
  return async (dispatch: Dispatch<StoryActions>) => {
    dispatch(fetchStoryIdsRequest());

    return hackernewsApi.getTopStoryIds()
    .then(response => {
      dispatch(fetchStoryIdsSuccess(response.ids));
      // dispatch(fetchStories({response.ids, page: 0}))
      return response.ids;
    })
    .catch(error => {
      dispatch(fetchStoryIdsFailure(error))
    });
  }
};
