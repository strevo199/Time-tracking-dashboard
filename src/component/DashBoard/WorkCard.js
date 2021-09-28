import React, { useContext, useEffect } from 'react'
import { DashBoardConrext } from '../context/DashBoardConrext'

const WorkCard = ({data,timeframe}) => {
    
    return (
       <div className=" flex items-end  flex-1">
            <div className="workcard hover:opacity-90 flex justify-center bg-blue-900 rounded-lg z-10 h-4/5 w-full">
                <div className="w-10/12 h-full relative flex flex-col">
                    <div className="text-white font-semibold justify-between flex h-1/4 items-center">
                        <h1>{data.title}</h1>
                        <img src="../images/icon-ellipsis.svg"  className= "right-0 absolute" alt="" />
                    </div>
                    <div className=" flex  flex-1 relative">
                        <div className="absolute h-full lg:items-start items-center w-full justify-evenly flex flex-col">
                            <h1 className="text-white  text-5xl">{timeframe.current}hrs</h1>
                            <p className="text-white opacity-70 text-xs">Last Week - <span>{timeframe.previous}hrs</span></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default WorkCard
