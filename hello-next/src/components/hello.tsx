import * as React from 'react'

export interface Props {
  onSubmit: (name: string) => void
  message?: string
  nameList: { id: number; name: string }[]
}

const Hello: React.FC<Props> = (props) => {
  const { onSubmit, message, nameList } = props
  const [inputText, setInputText] = React.useState('')
  // const [count, setCount] = React.useState(0)
  // const [message, setMessage] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const { msg } = await fetch('/api/hello').then<{ msg: string }>(res => res.json())
    // setMessage(msg)
    // setCount(count + 1)
    onSubmit(inputText)
  }
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="input your name..." onChange={handleChange} />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <p>{message}</p>
      <div>
        <ul>
          {nameList.map(({ id, name }) => (
            <li key={id}>
              {`${id.toString().padStart(3, '0')} ${name}`}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Hello
