import React from 'react'
import About from './component/About'
import DashBoardContextProvider from './component/context/DashBoardConrext'
import DashBoard from './component/DashBoard/DashBoard'

const App = () => {
  return (
    
    <div className ="app ">
      <DashBoardContextProvider>
        <DashBoard/>
        {/* <About/> */}
      </DashBoardContextProvider>
    </div>
    
    
  )
} 

export default App
