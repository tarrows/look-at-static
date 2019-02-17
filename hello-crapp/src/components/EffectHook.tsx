import * as React from 'react'

const EffectHook: React.FC<{ initial?: number }> = ({initial = 0}) => {
  const [count, setCount] = React.useState(initial)
  
  React.useEffect(() => {document.title = `You clicked ${count} times`})

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>!!Click Me!!</button>
    </div>
  )
}

export default EffectHook
