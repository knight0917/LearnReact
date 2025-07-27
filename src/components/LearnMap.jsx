import React from 'react'

const LearnMap = () => {
    const names = ['tony', 'bruce', 'Natasha', 'Steave']
  return (
    <>
        <h1>Learn Map</h1>
        <ul>
            {names.map((i, index)=>(
                <li key={index}>{i}</li>
            ))}
        </ul>
    </>
  )
}

export default LearnMap