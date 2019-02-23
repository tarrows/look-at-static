import * as React from 'react'

interface TodoProps {
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  completed: boolean
  text: string
}

const Todo: React.FC<TodoProps> = ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}><span className="nes-text">{text}</span></li>
)

export default Todo
