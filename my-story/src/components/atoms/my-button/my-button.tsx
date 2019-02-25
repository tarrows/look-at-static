import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => (<Button onClick={onClick}>{text}</Button>)

const Button = styled.button`
  background: #333;
  color: white;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem;
  outline: none;
`
