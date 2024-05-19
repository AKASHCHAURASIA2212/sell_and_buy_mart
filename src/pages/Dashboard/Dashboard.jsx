import React, { useState } from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';
import loaderGif from '../../asset/images/loading.gif';
import Loading from '../../components/Loading/Loading';

function Dashboard() {
    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    return (<>
        {
            isLoading === true && <div className='loader'>
                <Loading />
            </div>
        }

        <div className='main-container flex flex-col sm:flex-row justify-start w-full h-[92vh]'>

            <SideBar className='' />
            <div className="w-full py-4 px-4 overflow-y-auto">
                <Outlet className="outlet-cont" />
            </div>
        </div>
    </>
    )
}

export default Dashboard