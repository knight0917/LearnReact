import React, {useState} from 'react'

const CounterApp = () => {

    const [count, setCount] = useState(0)
    const incrCount = () =>{
        setCount(count+1)
    }
    const decrCount = () =>{
        setCount(count-1)
    }
    const resetCount = () =>{
        setCount(0)
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>Count: {count}</h2>
        <button onClick={incrCount}>Increase the count</button>
        <br/>
        <button onClick={decrCount}>Decrease the count</button>
        <br/>
        <button onClick={resetCount}>Reset</button>
    </>
    
  )
}

export default CounterApp