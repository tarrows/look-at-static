import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addTodo } from '../actions'

interface AddTodoProps {
  dispatch: Dispatch
}

const AddTodo: React.FC<AddTodoProps> = ({ dispatch }) => {
  let input: HTMLInputElement

  return (
    <div>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!input.value.trim()) { return }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={(node) => node ? (input = node) : '' } />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
