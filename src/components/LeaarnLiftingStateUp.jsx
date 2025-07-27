


const LeaarnLiftingStateUp = (props) => {

    const handleClick = () => {
        let stock = 'TATA'
        props.getStock(stock)
    }

  return (
    <>
        <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default LeaarnLiftingStateUp