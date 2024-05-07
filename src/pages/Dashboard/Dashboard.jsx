import React from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';

function Dashboard() {
    return (
        <div className='main-container flex flex-col sm:flex-row justify-start w-full h-[92vh]'>

            <SideBar className='' />
            <div className="w-full py-4 px-4 overflow-y-auto">
                <Outlet className="outlet-cont" />
            </div>
        </div>
    )
}

export default Dashboard