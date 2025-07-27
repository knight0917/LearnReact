import {useState} from 'react'


const LearnState = () => {
    const [num, setNum] = useState(5)
    console.log(num)

    const handleNum = () =>{
        setNum(10)
    }

    const [stockPrice, setStockPrice] = useState({stock: 'Airtel', price: 50})
    console.log(stockPrice)

    const updateStockPrice = () => {
        setStockPrice({...stockPrice, price: 200})
    }


  return (
    <>
        <button onClick={handleNum}>Click the state</button>
        <h2>Number: {num}</h2>
        <hr/>
        <h2>{stockPrice.stock}: {stockPrice.price}</h2>
        <button onClick={updateStockPrice}>Update</button>
    </>
  )
}

export default LearnState