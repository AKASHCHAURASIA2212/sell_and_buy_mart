import React, { useState } from 'react'
import userLogo from '../../asset/images/user.png';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { PiPackageLight } from "react-icons/pi";
import { RiNotificationBadgeLine } from "react-icons/ri";

function SideBar() {

    let [index, setIndex] = useState(0);
    return (
        <div>
            <div className=" hidden md:flex h-[96%] md:w-[20rem] flex-col overflow-hidden mx-2 my-2 px-2 rounded-lg bg-12 text-white">
                <p className="mt-10 ml-10 text-left text-4xl font-bold">ADMIN</p>
                <ul className="mt-10 space-y-3 py-2">

                    <li className=" flex cursor-pointer space-x-2 rounded-md px-10 py-4 ">
                        <Link to='/admin' className={`flex flex-row items-center ease-in-out ${index == 0 ? 'scale-125 ml-4' : ''} hover:ml-4 hover:scale-125`} onClick={() => { setIndex(0) }}>
                            <LuLayoutDashboard />
                            <p className="ml-2">DashBoard</p>
                        </Link>
                    </li>
                    <li className=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold ">
                        <Link to='user' className={`flex flex-row items-center ease-in-out ${index == 1 ? 'scale-125 ml-4' : ''} hover:scale-125 hover:ml-4`} onClick={() => { setIndex(1) }}>
                            <VscAccount />
                            <span className="ml-2">Users</span>
                        </Link>
                    </li>
                    <li className=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 ">
                        <Link to='item' className={`flex flex-row items-center ease-in-out ${index == 2 ? 'scale-125 ml-4' : ''} hover:scale-125 hover:ml-4`} onClick={() => { setIndex(2) }}>
                            <PiPackageLight />
                            <span className="ml-2">Inventory</span>
                        </Link>
                    </li>
                    <li className=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 ">
                        <Link to='notify' className={`flex flex-row items-center ease-in-out ${index == 3 ? 'scale-125 ml-4' : ''} hover:scale-125 hover:ml-4`} onClick={() => { setIndex(3) }}>
                            <RiNotificationBadgeLine />
                            <span className="ml-2">Notifications</span>
                        </Link>
                    </li>
                    {/* <li className=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 ">
                        <Link to='setting' className={`flex flex-row items-center ease-in-out ${index == 4 ? 'scale-125 ml-4' : ''} hover:scale-125 hover:ml-4`} onClick={() => { setIndex(4) }}>
                            <IoSettings />
                            <span className="ml-2">Settings</span>
                        </Link>
                    </li> */}
                </ul>

                {/* <div className="w-[96%] mt-6 mx-auto flex justify-start items-center cursor-pointer bg-white hover:bg-slate-400 px-2 py-2 rounded-lg text-black">
                    <div>
                        <img className="h-12 w-12 rounded-full" src={userLogo} />
                    </div>
                    <div className="ml-3">
                        <p className="">Akash Chaurasia</p>
                        <p className="text-xs text-black-300">Ghaziabad, India</p>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default SideBar