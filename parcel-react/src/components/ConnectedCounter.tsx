import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../ducks/counter'
import { RootState } from '../ducks'

const countSelector = (state: RootState) => state.counter.count

const ConnectedCounter: React.FC = () => {
  const dispatch = useDispatch()
  const count = useSelector(countSelector)

  return (
    <>
      <h1>COUNT: {count}</h1>
      <button onClick={() => dispatch(increment(2))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </>
  )
}

export default ConnectedCounter
