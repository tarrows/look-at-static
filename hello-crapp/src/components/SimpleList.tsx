import * as React from 'react'

export interface SimpleListProps {
  items: {id: number, name: string}[]
}

const SimpleList: React.FC<SimpleListProps> = (props: SimpleListProps) => (
  <ul>
      {props.items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)

export default SimpleList
