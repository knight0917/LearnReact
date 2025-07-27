

// const LearnProps = (props) => {
//   return (
//     <>
//         <h2>Props</h2>
//         <h3>Stock name: {props.stock} & price: {props.price}</h3>
//     </>
//   )
// }

const LearnProps = ({stock, price}) => {
  return (
    <>
        <h2>Props</h2>
        <h3>Stock name: {stock} & price: {price}</h3>
    </>
  )
}

export default LearnProps