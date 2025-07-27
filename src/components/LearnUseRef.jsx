import React, {useState, useRef} from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef('')
    const previousNamerefElement = useRef('')


    const clearText = () =>{
        setName('')
        refElement.current.focus()
    }
    const handleInput = (e) =>{
        previousNamerefElement.current = name
        setName(e.target.value)
    }
  return (
    <>
        <h1>Use Ref</h1>
        <input refElement={refElement} type='text' value={name} onChange={handleInput} />
        <button onClick={clearText}>Clear text</button>
        <br />
        <h1>Previous text: {previousNamerefElement.current}</h1>
    </>
  )
}

export default LearnUseRef