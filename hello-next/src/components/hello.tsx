import * as React from 'react'

const Hello: React.FC = () => {
  const [count, setCount] = React.useState(0)
  const [message, setMessage] = React.useState('')
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const { msg } = await fetch('/api/hello').then<{ msg: string }>(res => res.json())
    setMessage(msg)
    setCount(count + 1)
  }
  return (
    <React.Fragment>
      <div><button onClick={handleClick}>HELLO</button></div>
      <p>{count} - {message}</p>
    </React.Fragment>
  )
}

export default Hello
