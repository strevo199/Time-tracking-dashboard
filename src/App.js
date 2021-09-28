import React from 'react'
import DashBoardContextProvider from './component/context/DashBoardConrext'
import DashBoard from './component/DashBoard/DashBoard'

const App = () => {
  return (
    
    <div className ="app ">
      <DashBoardContextProvider>
        <DashBoard/>
      </DashBoardContextProvider>
    </div>
    
    
  )
} 

export default App
