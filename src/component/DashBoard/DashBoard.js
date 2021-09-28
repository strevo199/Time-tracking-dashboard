import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DashBoardConrext } from '../context/DashBoardConrext'
import UserInfro from '../UserInfro'
import WorkCard from './WorkCard'


const DashBoard = () => {
    const {data,currentimeFrame} = useContext(DashBoardConrext)

    return (
        <div className="dashBoard  overflow-y-scroll flex justify-center items-center">
            <div className=" w-4/5 h-4/5 flex gap-x-4">
                <div className=" gap-4 grid md:grid-cols-2 lg:grid-cols-4 h-full w-full">
                    <UserInfro/>
                    {
                        data.map(mydata =>{ 
                            let alala;
                            if (currentimeFrame) {
                                alala = mydata.timeframes[currentimeFrame]
                            }
                            return (
                        <div className={`rounded-lg flex  lg:h-auto h-56  relative ${mydata.title.toLowerCase()}`}>
                            <img src={mydata.img}  className= "right-4  opacity-50 absolute" alt="" />
                            <WorkCard data = {mydata} timeframe = {alala} />
                        </div>

                        )})
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard
