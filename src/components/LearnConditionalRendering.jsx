import React, {useState} from 'react'

const LearnConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [status, setStatus] = useState(true)
  return (
    <>
        <h1>Constional Rendering</h1>
        {isLoggedIn ? (
            <h3>Welcome User!!</h3>
        ) : (
            <h3>Please Login</h3>
        )}

        {status && (
            <h3>Show data</h3>
        )}
    </>
  )
}

export default LearnConditionalRendering