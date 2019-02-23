export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0

export const addTodo = (text: string) => ({
  type: ADD_TODO as typeof ADD_TODO,
  payload: { id: nextTodoId++, text }
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO as typeof TOGGLE_TODO,
  payload: { id }
})

export const setVisibilityFilter = (filter: VisibilityFilters) => ({
  type: SET_VISIBILITY_FILTER as typeof SET_VISIBILITY_FILTER,
  payload: { filter }
})

export type SHOW_ALL = 'SHOW_ALL'
export type SHOW_COMPLETED = 'SHOW_COMPLETED'
export type SHOW_ACTIVE = 'SHOW_ACTIVE'

export type VisibilityFilters = SHOW_ALL | SHOW_COMPLETED | SHOW_ACTIVE

export type Action = ReturnType<typeof addTodo | typeof toggleTodo | typeof setVisibilityFilter>

/*
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
*/
