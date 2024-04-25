import React from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';

function Dashboard() {

    return (
        <div className='main-container flex flex-col sm:flex-row justify-start w-full'>
            <div
            // className="w-[70%] md:w-[40%] lg:w-[25%] sm:h-[100vh]"
            >
                <SideBar className='' />
            </div>
            <div className="w-full h-[100vh] py-4 px-6">
                <Outlet className="outlet-cont" />
            </div>
        </div>
    )
}

export default Dashboard