import React from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';

function Dashboard() {

    return (
        <div className='main-container flex flex-column sm:flex-row justify-between w-full'>
            <SideBar className='' />
            <Outlet className="outlet-cont h-[90vh] m-0" />
        </div>
    )
}

export default Dashboard