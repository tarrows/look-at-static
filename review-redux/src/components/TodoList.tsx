import * as React from 'react'
import Todo from './Todo'

export interface TodoListProps {
  todos: Array<{id: number, completed: boolean, text: string}>
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <div className="nes-container is-rounded">
    <ul className="nes-list is-circle">
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)}
    </ul>
  </div>
)

export default TodoList
