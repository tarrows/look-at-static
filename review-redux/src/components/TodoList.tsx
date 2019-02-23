import * as React from 'react'
import Todo from './Todo'

export interface TodoListProps {
  todos: Array<{id: number, completed: boolean, text: string}>
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)}
  </ul>
)

export default TodoList
