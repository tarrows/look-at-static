import * as React from 'react'

const HooksExample: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [count, setCount] = React.useState(initial)

  return (<>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me!</button>
  </>)
}

export default HooksExample
