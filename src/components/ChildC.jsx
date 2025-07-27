import {useContext} from 'react'
// import { StockContext, UserContext } from '../App'

const ChildC = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
  return (
    <>
        <h2>User: {userData.user.name}</h2>
        <h2>Is logged in?: {userData.user.isLoggedIn}</h2>
        <h2>Stock name: {stockData.stock}</h2>
    </>
  )
}

export default ChildC