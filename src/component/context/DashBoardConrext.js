import React, { createContext, useReducer } from 'react'
import data from '../data.json'
import datareducer from './datareducer'


export const DashBoardConrext = createContext()

const initialState = {
    currentimeFrame :'daily',
    data,
    nav:[
        {id:1,navName:'daily',},
        {id:1,navName:'weekly',},
        {id:1,navName:'monthly',},
    ]
}

const DashBoardContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(datareducer, initialState)
    
    const handleTimeFrame = (newframe) =>{
        dispatch({
            type:'CHFRAME',
            payload:newframe
        })

        
    }
   

    return (
        <DashBoardConrext.Provider value ={{
            nav:state.nav,
            currentimeFrame:state.currentimeFrame,
            data,
            handleTimeFrame
        }}>
        {children}
            
        </DashBoardConrext.Provider>
    )
}

export default DashBoardContextProvider
