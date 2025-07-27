import React from 'react'
import useCounter from '../hooks/UseCounter'

const LearnCustomHooks = () => {
    const {count, increment, decrement, reset} = useCounter(5)
  return (
    <>
        <h1>Cutom Hooks</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default LearnCustomHooks