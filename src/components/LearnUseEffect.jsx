import React, {useEffect, useState} from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [random, setRandom] = useState(0)

    const increaseCount = () =>{
        setCount(count + 1)
    }
    const generateRandom = () =>{
        const randomNum = Math.floor(Math.random() * 100)
        setRandom(randomNum)
    }
// useEffect
    useEffect(() =>{
        console.log("UseEffect is called.")
        //clean up method to restart useeffect
        return () =>{
            console.log('cleanup method called')
        }
        //[]for which state you want to call, if empty nothing calls
    }, [count] )

  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Click to increase the count</button>
        <hr />
        <h1>Random number: {random}</h1>
        <button onClick={generateRandom}>Click to generate random number</button>
    </>
  )
}

export default LearnUseEffect