import { Reducer } from 'redux'
import { Action, ADD_TODO, TOGGLE_TODO } from '../actions'

export interface TodoState {
  todos: Array<{id: number, text: string, completed: boolean}>
}

const initialState: TodoState = {
  todos: []
}

const todos: Reducer<TodoState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, text } = action.payload
      return { todos: [ ...state.todos, { id, text, completed: false }]}
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
      }
    default:
      return state
  }
}

export default todos
