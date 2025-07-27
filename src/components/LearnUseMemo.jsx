import {useState, useMemo} from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(100)

    const increaseCount = () =>{
        if (count === 10){
            setNumber(99)
        }
        setCount( count + 1)
    }

    const sumOfNumber = useMemo(() => {
        let sum = 0;
        for(let i=0;i<=number;i++){
            sum+=1
        }
        return sum
    }, [number])

    console.log(`sum of numbers from 1 to ${number}:`, sumOfNumber)


  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo