// import { createContext, useState } from "react"
import ChildA from "./components/ChildA"
import CounterApp from "./components/CounterApp"
import LeaarnLiftingStateUp from "./components/LeaarnLiftingStateUp"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnEvent from "./components/LearnEvent"
import LearnForm from "./components/LearnForm"
import LearnMap from "./components/LearnMap"
import LearnProps from "./components/LearnProps"
import LearnState from "./components/LearnState"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseRef from "./components/LearnUseRef"


// const StockContext = createContext()
// const UserContext = createContext()

function App() {
  // let price = 200  
  // let stock = 'Bikaneri'
  // const [user, setUser] = useState({name:'knight', isLoggedIn: 'Yes'})

  // const getStock = (data) =>{
  //   console.log(data)
  // }

  return (
    <>
      {/* <h1>App.js</h1> */}
      {/* <LearnProps stock='Tesla' price={price} /> */}
      {/* <LearnEvent /> */}
      {/* <LeaarnLiftingStateUp getStock = {getStock} /> */}
      {/* <LearnState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <StockContext.Provider value={{stock, price}}>
        <UserContext.Provider value={{user, setUser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      {/* <LearnUseRef /> */}
      {/* <LearnCustomHooks /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      <LearnForm />
    </>
  )
}

export default App
// export {StockContext, UserContext}
