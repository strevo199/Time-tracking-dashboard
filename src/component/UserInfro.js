import React, { useContext } from 'react'
import { DashBoardConrext } from './context/DashBoardConrext'



const UserInfro = () => {
    const {nav,handleTimeFrame,currentimeFrame} = useContext(DashBoardConrext)
    

    
    return (
        <div className=" userinfro lg:h-auto h-56 lg:row-span-2 lg:col-span-1 md:col-span-2 flex flex-col flex-1 rounded-2xl">
            <div className="h-2/3 userinfromain flex justify-center w-full rounded-2xl">
                <div className="w-10/12 flex lg:flex-col lg:justify-evenly gap-6 lg:items-start relative items-center">
                    <img className=" h-14 w-14 border-white border-2 rounded-full" src="../images/image-jeremy.png" alt="" />
                    <div className="">
                        <h1 className="text-white opacity-80 text-xs sm:text-sm">Reported for</h1>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            <nav className="flex-1  flex justify-center">
                <ul className="w-10/12 capitalize h-full flex lg:flex-col sm:text-lg lg:items-start  text-sm  items-center sm:justify-evenly sm:gap-0 gap-4 justify-center lg:justify-evenly">
                   { nav.map(tab =>(
                    <li key ={tab.id} onClick ={() =>handleTimeFrame(tab.navName)} className={currentimeFrame === tab.navName ?" font-semibold text-blue-500 cursor-pointer ":"text-white font-semibold hover:text-blue-500 cursor-pointer"}>{tab.navName}</li>
                   ))
                   }
                </ul>
            </nav>
        </div>
    )
}

export default UserInfro
