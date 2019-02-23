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
    <div className="nes-container is-rounded">
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!input.value.trim()) { return }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="nes-field is-inline">
          <input className="nes-input" type="text" ref={(node) => node ? (input = node) : '' } />
          <button className="nes-btn is-primary" type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
